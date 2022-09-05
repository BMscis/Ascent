import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(1000);
const common = {
  InformTimeout : () => {console.log("Times up")},
  ShowPolicy : (tkn) => {
    console.log("TOKEN: ", tkn)
  }
}

const [ accInsurer, accInsuredParty ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Insurer and InsuredParty!');

console.log('Launching...');
const ctcInsurer = accInsurer.contract(backend);
const ctcInsuredParty = accInsuredParty.contract(backend, ctcInsurer.getInfo());
console.log(ctcInsuredParty)
//const chx = accInsuredParty.a.CheckExpiry

const InsuredPartyInterface = {
  Insure : () => {
    return {
      "Model": "NISSAN",
      "Year":2015,
      "InsuredParty":accInsuredParty.getAddress(),
      "Licence_plate":"KAW659Q",
      "Vehicle_purpose":0,
      "Insurance_provided":1,
      "Valuation":stdlib.parseCurrency(50),
      "Kyc":"https://docs.reach.sh/rsh/consensus/#rsh_Set"
      }
  },
  PayInsurance: (i) => {
    console.log("PAY AMOUNT: ", stdlib.bigNumberToNumber(stdlib.formatCurrency(i)))
    return true
  },
  TokenDestroyed:() => {
    console.log("Token Destroyed")
  }
}
const InsurerInterface = {
  StartingBalance: () => {
    return [20,10]
  },
  ShowMeta : async (x,y) => {
    console.log("SHOW DIGEST: ", x)
    console.log("SHOW DIGEST: ", x.substring(0,31))
    console.log("SHOW STAMP: ", y)
    return x
  }
}

console.log('Starting backends...');
await Promise.all([
  backend.Insurer(ctcInsurer, {
    ...stdlib.hasRandom,
    ...common,
    ...InsurerInterface
    // implement Insurer's interact object here
  }),
  backend.InsuredParty(ctcInsuredParty, {
    ...stdlib.hasRandom,
    ...common,
    ...InsuredPartyInterface
    // implement InsuredParty's interact object here
  }),
]);

const [hasExpired, expiry,owned] = await chx.check(0)
if(owned){
    console.log("Has expired: ", hasExpired)
    console.log("Expiry: ", stdlib.bigNumberToNumber(expiry))
    //return [hasExpired,stdlib.bigNumberToNumber(expiry),owned]
}else{
    console.log("You don't own this asset")
}

console.log('Goodbye, Insurer and InsuredParty!');
