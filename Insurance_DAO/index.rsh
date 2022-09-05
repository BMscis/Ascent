'reach 0.1';


const [VehiclePurpose, PRIVATE, COMMERCIAL, MOTORCYCLES] = makeEnum(3)
const [InsuranceType, THIRDPARTY, COMPREHENSIVE] = makeEnum(2)
const [claims, WINDSCREEN, CARDAMAGE, PROPERTYDAMAGE, THIRDPERSON] = makeEnum(4)
const RISK = Struct([
  ["Model", Bytes(32)],
  ["Year", UInt],
  ["InsuredParty", Address],
  ["Licence_plate", Bytes(8)],
  ["Vehicle_purpose", UInt],
  ["Insurance_provided", UInt],
  ["Valuation", UInt],
  ["Kyc", Bytes(96)]
])
const RISKOBJECT = Object({
  "Model": Bytes(32),
  "Year": UInt,
  "InsuredParty": Address,
  "Licence_plate": Bytes(8),
  "Vehicle_purpose": UInt,
  "Insurance_provided": UInt,
  "Valuation": UInt,
  "Kyc": Bytes(96)
})
const STAMP = Struct([
  ["Model", Bytes(32)],
  ["Year", UInt],
  ["InsuredParty", Address],
  ["Licence_plate", Bytes(8)],
  ["Vehicle_purpose", UInt],
  ["Insurance_provided", UInt],
  ["Valuation", UInt],
  ["Kyc", Bytes(96)],
  ["Consensus_time", UInt],
  ["Expiry_date", UInt]
])
const POLICY = Struct([
  ["Model", Bytes(32)],
  ["Year", UInt],
  ["InsuredParty", Address],
  ["Licence_plate", Bytes(8)],
  ["Vehicle_purpose", UInt],
  ["Insurance_provided", UInt],
  ["Valuation", UInt],
  ["Kyc", Bytes(96)],
  ["Consensus_time", UInt],
  ["Expiry_date", UInt],
  ["hash", Digest]
])
const POLICYOBJECT = Object({
  "Model": Bytes(32),
  "Year": UInt,
  "InsuredParty": Address,
  "Licence_plate": Bytes(8),
  "Vehicle_purpose": UInt,
  "Insurance_provided": UInt,
  "Valuation": UInt,
  "Kyc": Bytes(96),
  "Consensus_time": UInt,
  "Expiry_date": UInt,
  "hash": Digest,
})
const STICKER = Struct([
  ["name", Bytes(32)],
  ["symbol", Bytes(8)],
  ["url", Bytes(96)],
  ["metadata", Bytes(32)],
  ["supply", UInt],
  ["decimals", UInt]
])
const expiry = 10
const policy_amount = 2
const standard = 3
const private_rate = 4
const commercial_rate = 6
const two_wheel_rate = 5
const windscreen_claim = 1
const cardamage_claim = 5
const property_claim = 3
const thirdperson_claim = 6
const InsurerInterface = {
  StartingBalance: Fun([], Tuple(UInt, UInt)),
  ShowMeta: Fun([Digest, POLICYOBJECT], Bytes(32)),
  CreatingToken: Fun([], Null),
  AddFunds: Fun([UInt, UInt], Bool)
}
const InsuredPartyInterface = {
  Insure: Fun([], RISKOBJECT),
  PayInsurance: Fun([UInt], Bool),
  TokenDestroyed: Fun([], Null)
}
const common = {
  ...hasRandom,
  InformTimeout: Fun([], Null),
  NotEnoughFunds: Fun([], Null),
  ShowPolicy: Fun([Token], Null),
  FailedToPay: Fun([], Null)
}
const GetRate = (i) => {
  const provider = InsuranceType(i)
  if (provider == THIRDPARTY) {
    return standard
  }
  else if (provider == COMPREHENSIVE) {
    return standard
  }
}
const GetQuotation = (r) => {
  const vehicle_purpose = r.Vehicle_purpose
  const insurance_provided = r.Insurance_provided
  const valued_price = r.Valuation
  const vp = vehicle_purpose == PRIVATE ? muldiv(private_rate, valued_price, 100) :
    vehicle_purpose == COMMERCIAL ? muldiv(commercial_rate, valued_price, 100) :
      muldiv(two_wheel_rate, valued_price, 100)
  return vp
}
const GetClaim = (c, y) => {
  const gc = c == WINDSCREEN ? muldiv(windscreen_claim, y, 100) :
    c == CARDAMAGE ? muldiv(cardamage_claim, y, 100) :
      c == PROPERTYDAMAGE ? muldiv(property_claim, y, 100) :
        c == THIRDPERSON ? muldiv(thirdperson_claim, y, 100) :
          0
  return gc
}
export const main = Reach.App(() => {
  const Insurer = Participant('Insurer', {
    ...common,
    ...InsurerInterface
  });
  const InsuredParty = Participant('InsuredParty', {
    ...common,
    ...InsuredPartyInterface
  });
  const CheckExpiry = API("CheckExpiry", {
    check: Fun([UInt], Tuple(Bool, UInt, Bool)),
    PlaceClaim: Fun([UInt], Tuple(Bool,UInt))
  })
  init();

  const IT = () => {
    each([Insurer, InsuredParty], () => interact.InformTimeout())
  }
  const NT = () => {
    each([Insurer, InsuredParty], () => interact.NotEnoughFunds())
  }

  Insurer.only(() => {
    const [algos, deadline] = declassify(interact.StartingBalance())
    assume(algos > 0 && deadline > 0, "Starting balance must be greater than 0")
  })
  Insurer.publish(algos, deadline);
  require(algos > 0, "Starting balance must be greater than 0")
  commit();
  Insurer.pay(algos)
  const dummy_test_time = thisConsensusTime()
  const dummy_digest = digest(dummy_test_time)
  const test_policy = POLICY.fromTuple([
    "00000000000000000000000000000000",
    0,
    Insurer,
    "00000000",
    0,
    0,
    0,
    "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    0,
    0,
    dummy_digest
  ])
  const dummy_policy = Struct.toObject(test_policy)
  commit();
  InsuredParty.only(() => {
    const risk_to_insure = declassify(interact.Insure())
    const premium = GetQuotation(risk_to_insure)
  })
  InsuredParty.publish(risk_to_insure, premium);
  const tClaim = GetClaim(3,risk_to_insure.Valuation)
  const aboveClaim = tClaim * 3
  // if(balance() < tClaim * 3){
  //   commit()
  //   Insurer.only(()=>{
  //     const pf = declassify(interact)
  //   })
  // }

  if(balance() < aboveClaim){
    commit();
    Insurer.only(()=>{
      const fund = declassify(interact.AddFunds(balance(),aboveClaim - balance()))
    })
    Insurer.publish(fund)
    .pay(aboveClaim - balance())
    .when(fund)
    .timeout(relativeTime(deadline), () => closeTo(Insurer,NT))
  }

  commit()

  InsuredParty.only(() => {
    const payInsurace = declassify(interact.PayInsurance(premium))
  })
  InsuredParty.publish(payInsurace)
    .pay(premium)
    .when(payInsurace)
    .timeout(relativeTime(deadline), () => closeTo(Insurer, IT))

  const Customers = new Set()
  const CustomerInsurance = new Map(POLICYOBJECT)

  const WINDSCREENClaimsSet = new Set()
  const CARDAMAGEClaimsSet = new Set()
  const PROPERTYDAMAGEClaimsSet = new Set()
  const THIRDPERSONClaimsSet = new Set()
  const WINDSCREENClaimsMap = new Map(UInt)
  const CARDAMAGEClaimsMap = new Map(UInt)
  const PROPERTYDAMAGEClaimsMap = new Map(UInt)
  const THIRDPERSONClaimsMap = new Map(UInt)

  Customers.insert(InsuredParty)
  const pT = thisConsensusTime()
  const dL = pT + deadline
  const stamp = [
    risk_to_insure.Model,
    risk_to_insure.Year,
    risk_to_insure.InsuredParty,
    risk_to_insure.Licence_plate,
    risk_to_insure.Vehicle_purpose,
    risk_to_insure.Insurance_provided,
    risk_to_insure.Valuation,
    risk_to_insure.Kyc,
    pT,
    dL
  ]
  const metadata = digest(stamp)
  const locked_policy = POLICY.fromTuple([
    risk_to_insure.Model,
    risk_to_insure.Year,
    risk_to_insure.InsuredParty,
    risk_to_insure.Licence_plate,
    risk_to_insure.Vehicle_purpose,
    risk_to_insure.Insurance_provided,
    risk_to_insure.Valuation,
    risk_to_insure.Kyc,
    pT,
    dL,
    metadata
  ])

  const lP = Struct.toObject(locked_policy)
  CustomerInsurance[this] = lP
  commit();
  Insurer.only(() => {
    //const [cmt,salt] = makeCommitment(stamp)
    const meta = declassify(interact.ShowMeta(metadata, lP))
  })
  Insurer.publish(meta)
  const POLICY_RIGHTS = STICKER.fromTuple([
    risk_to_insure.Model,
    risk_to_insure.Licence_plate,
    risk_to_insure.Kyc,
    meta,
    policy_amount,
    0
  ])
  commit()
  InsuredParty.publish()
  const INSURANCE = new Token(STICKER.toObject(POLICY_RIGHTS))
  require(INSURANCE.supply() == policy_amount)

  const ftp = (tkn) => {
    return (() => {
      assert(tkn == INSURANCE, "Not the same token")
      each([Insurer, InsuredParty], () => interact.FailedToPay())
      InsuredParty.pay([0, [1, INSURANCE]])
      INSURANCE.burn();
      if (INSURANCE.destroyed() == false) {
        InsuredParty.interact.TokenDestroyed()
        INSURANCE.destroy();
      }
      commit()
    })
  }
  commit();

  each([Insurer, InsuredParty], () => interact.ShowPolicy(INSURANCE));
  Insurer.publish()
  transfer(1, INSURANCE).to(InsuredParty)

  const [notDone] = parallelReduce([false])
    .invariant(
      balance() > 0 &&
      balance(INSURANCE) <= INSURANCE.supply())
    .define(() => {
      const CheckOwner = (x,o)=>{
        return x.InsuredParty == o
      }
      const HasExpired = (x,c) => {
        return x.Expiry_date < c
      }
      const CheckClaim = (c, t) => {
        const cc = c == WINDSCREEN ? !WINDSCREENClaimsSet.member(t) :
          c == CARDAMAGE ? !CARDAMAGEClaimsSet.member(t) :
            c == PROPERTYDAMAGE ? !PROPERTYDAMAGEClaimsSet.member(t) :
              c == THIRDPERSON ? !THIRDPERSONClaimsSet.member(t) : false
        return cc
      }
      const AddToClaimsMap = (x, y, t) => {
        if (x == WINDSCREEN) {
          WINDSCREENClaimsSet.insert(t)
          WINDSCREENClaimsMap[t] = y
        }
        if (x == CARDAMAGE) {
          CARDAMAGEClaimsSet.insert(t)
          CARDAMAGEClaimsMap[t] = y
        }
        if (x == PROPERTYDAMAGE) {
          PROPERTYDAMAGEClaimsSet.insert(t)
          PROPERTYDAMAGEClaimsMap[t] = y
        }
        if (x == THIRDPERSON) {
          THIRDPERSONClaimsSet.insert(t)
          THIRDPERSONClaimsMap[t] = y
        }
      }
    })
    .while(balance(INSURANCE) < INSURANCE.supply())
    .api(CheckExpiry.check,
      ((tn) => {
        assume(Customers.member(this), "You are not insured")
      }),
      ((tn) => 0),
      ((tn, fn) => {
        require(Customers.member(this), "You are not insured")
        const mp = fromSome(CustomerInsurance[this], dummy_policy)
        const isOwner = CheckOwner(mp,this)
        const hasExpired = HasExpired(mp,thisConsensusTime())
        if (isOwner) {
          fn([hasExpired, mp.Expiry_date, true])
          if (hasExpired) {
            commit()
            InsuredParty.pay([0, [1, INSURANCE]])
          }
        } else {
          fn([false, 0, false])
        }
        return [true]
      }))
    .api(CheckExpiry.PlaceClaim,
      ((cl) => {
        assume(Customers.member(this), "You are not insured")
      }),
      ((cl) => 0),
      ((cl, fn) => {
        require(Customers.member(this), "You are not insured")
        const mp = fromSome(CustomerInsurance[this], dummy_policy)
        const CisOwner = CheckOwner(mp,this)
        const ChasExpired = HasExpired(mp,thisConsensusTime())
        const canClaim = CheckClaim(cl, this)
        const toPay = GetClaim(cl, mp.Valuation)
        if (CisOwner && ChasExpired && canClaim && balance() > toPay) {
          if (mp.InsuredParty == this) {
            transfer(toPay).to(this)
            fn([true,toPay])
            AddToClaimsMap(cl, toPay, this)
          } else fn([false,0])            
        } else fn([false,0])
        return [true]
      }))

  if (balance() > 0) {
    transfer(balance()).to(Insurer)
  }
  INSURANCE.burn();
  if (INSURANCE.destroyed() == false) {
    InsuredParty.interact.TokenDestroyed()
    INSURANCE.destroy();
  }
  commit()
  exit();
});
