'reach 0.1';
const [VehiclePurpose, PRIVATE, COMMERCIAL,MOTORCYCLES] = makeEnum(3)
const [InsuranceType, THIRDPARTY,COMPREHENSIVE] = makeEnum(2)
const RISK = Struct([
["Model", Bytes(32)],
["Year",UInt],
["InsuredParty",Address],
["Licence_plate",Bytes(8)],
["Vehicle_purpose", UInt],
["Insurance_provided",UInt],
["Valuation", UInt],
["Kyc",Bytes(96)]
])
const RISKOBJECT = Object({
    "Model": Bytes(32),
    "Year":UInt,
    "InsuredParty":Address,
    "Licence_plate":Bytes(8),
    "Vehicle_purpose":UInt,
    "Insurance_provided":UInt,
    "Valuation":UInt,
    "Kyc":Bytes(96)
})
const STAMP = Struct([
["Model", Bytes(32)],
["Year",UInt],
["InsuredParty",Address],
["Licence_plate",Bytes(8)],
["Vehicle_purpose", UInt],
["Insurance_provided",UInt],
["Valuation", UInt],
["Kyc",Bytes(96)],
["Consensus_time",UInt],
["Expiry_date", UInt]
])
const POLICY = Struct([
  ["Model"             ,Bytes(32)],
  ["Year"              ,UInt],
  ["InsuredParty"      ,Address],
  ["Licence_plate"     ,Bytes(8)],
  ["Vehicle_purpose"   ,UInt],
  ["Insurance_provided",UInt],
  ["Valuation"         ,UInt],
  ["Kyc"               ,Bytes(96)],
  ["Consensus_time"    ,UInt],
  ["Expiry_date"       ,UInt],
  ["hash"              ,Digest]
])
const POLICYOBJECT = Object({
  "Model"             :Bytes(32),
  "Year"              :UInt,
  "InsuredParty"      :Address,
  "Licence_plate"     :Bytes(8),
  "Vehicle_purpose"   :UInt,
  "Insurance_provided":UInt,
  "Valuation"         :UInt,
  "Kyc"               :Bytes(96),
  "Consensus_time"    :UInt,
  "Expiry_date"       :UInt,
  "hash"              :Digest,
})
const STICKER =Struct([
  ["name",     Bytes(32)],
  ["symbol",   Bytes(8)],
  ["url",      Bytes(96)],
  ["metadata", Bytes(32)],
  ["supply",   UInt],
  ["decimals", UInt]
])
const expiry = 10
const policy_amount = 2
const standard = 3
const private_rate = 4
const commercial_rate = 6
const two_wheel_rate = 5
const InsurerInterface = {
  StartingBalance:Fun([],Tuple(UInt,UInt)),
  ShowMeta:Fun([Digest,POLICYOBJECT],Bytes(32)),
  CreatingToken:Fun([],Null)
}
const InsuredPartyInterface = {
  Insure:Fun([],RISKOBJECT),
  PayInsurance:Fun([UInt], Bool)
}
const common = {
  ...hasRandom,
  InformTimeout: Fun([],Null),
  ShowPolicy: Fun([Token],Null)
}
const GetRate = (i) => {
  const provider = InsuranceType(i)
  if(provider == THIRDPARTY){
    return standard
  }
  else if(provider == COMPREHENSIVE){
    return standard
  }
}

const GetQuotation = (r) => {
  const vehicle_purpose = r.Vehicle_purpose
  const insurance_provided = r.Insurance_provided
  const valued_price = r.Valuation
  if(vehicle_purpose == PRIVATE){
    const Ppremium = muldiv(private_rate, valued_price, 100)
    return Ppremium
  }
  else if(vehicle_purpose == COMMERCIAL){
    const Cpremium = muldiv(commercial_rate, valued_price, 100)
    return Cpremium 
  }
  else{
    const Mpremium = muldiv(two_wheel_rate, valued_price, 100)
      return Mpremium
  }
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
    check: Fun([UInt],Tuple(Bool,UInt,Bool))
  })
  init();

  const IT = () => {
    each([Insurer,InsuredParty], () => interact.InformTimeout())
  }

  Insurer.only(()=>{
    const [algos,deadline] = declassify(interact.StartingBalance())
    assume(algos > 0 && deadline > 0, "Starting balance must be greater than 0")
  })
  Insurer.publish(algos,deadline);
  require(algos > 0, "Starting balance must be greater than 0")
  commit();
  Insurer.pay(algos)
  commit();
  InsuredParty.only(()=>{
    const risk_to_insure = declassify(interact.Insure())
    const premium = GetQuotation(risk_to_insure)
  })
  InsuredParty.publish(risk_to_insure,premium);

  commit();

  InsuredParty.only(() => {
    const payInsurace = declassify(interact.PayInsurance(premium))
  })
  InsuredParty.publish(payInsurace)
  .pay(premium)
  .when(payInsurace)
  .timeout(relativeTime(deadline), () => closeTo(Insurer,IT))

  const Customers = new Set()
  const CustomerInsurance = new Map(POLICYOBJECT)
  Customers.insert(InsuredParty)
  const pT = thisConsensusTime()
  const dL = pT + deadline
  const stamp =  [
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
  Insurer.only(()=>{
    //const [cmt,salt] = makeCommitment(stamp)
    const meta = declassify(interact.ShowMeta(metadata,lP))
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
  commit();
 
  each([Insurer,InsuredParty], () => interact.ShowPolicy(INSURANCE));
  Insurer.publish()
  transfer(balance()).to(Insurer)
  transfer(1,INSURANCE).to(InsuredParty)

  const [done] = parallelReduce([false])
  .invariant(
  balance() == 0 && 
  balance(INSURANCE) <= INSURANCE.supply())
  .while(balance(INSURANCE) <= INSURANCE.supply())
  .api(CheckExpiry.check,
    ((tn)=>{
      assume(Customers.member(this), "You are not insured")
    }),
    ((tn)=>0),
    ((tn, fn)=>{
      require(Customers.member(this) , "You are not insured")
      const mp = fromSome(CustomerInsurance[this],lP)
      if(mp.InsuredParty == this){
        const hasExpired = mp.Expiry_date < thisConsensusTime()
        fn([hasExpired,mp.Expiry_date,true])
      }else{
        fn([false,0,false])
      }
      return [true]
    }))
  INSURANCE.burn();
  INSURANCE.destroy();
  commit()
  exit();
});
