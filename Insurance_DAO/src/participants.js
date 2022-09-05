import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs'
import {AcceptAddFunds, AcceptAndPay,CE,CrToken,IncreaseFunds,InsuranceAmount, NewToken, TokenSent} from "./store/pStore"
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const stdlib =  loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));

class Participants {
    constructor(CtxInfo){
        this.CtxInfo = CtxInfo
    }
    random() { return stdlib.hasRandom.random(); }
    async deploy (){
        console.log("Deploying")
        this.account = await stdlib.getDefaultAccount()
        this.contract = this instanceof InsurerInterface ? 
        this.account.contract(backend) : this.account.contract(backend,
            JSON.parse(this.CtxInfo))
    }
    async InformTimeout () {
        console.log("Times up")
    }
    async NotEnoughFunds (){
        console.log("NOT ENOUGH FUNDS")
    }
    async ShowPolicy (tkn) {
        this.account.tokenAccept(tkn)
        console.log("TOKEN: ", tkn)
        if(this instanceof InsuredPartyInterface){
            CE.set(true)
            TokenSent.set(true)
        }else{
            NewToken.set(true)
        }
        
    }
}
export class InsurerInterface extends Participants{
    constructor(){
        super(undefined)
    }
    async StartingBalance (){
        return [stdlib.parseCurrency(20),10]
    }
    async Insure (){
        this.contract.p.Insurer(this)
        return JSON.stringify(await this.contract.getInfo())
    }
    async AddFunds (x,y) {
        const currentBalance = stdlib.formatCurrency(x)
        const addFunds = stdlib.formatCurrency(y)
        console.log("Current Balance: ", currentBalance)
        console.log("ADD FUNDS: ", addFunds)
        IncreaseFunds.set([currentBalance,addFunds])
        const accept = new Promise((resolve, reject) => {
            AcceptAddFunds.subscribe(val => {
                console.log("WAITING: ",val)
                if(val){
                    console.log("VAL?",val)
                    this.AcceptAndPay = val
                    resolve(this.AcceptAndPay)
        }})})
        if(!this.AcceptAndPay){
            await accept
        }
        return this.AcceptAndPay
    }
    async ShowMeta (x,y) {
        console.log("SHOW DIGEST: ", x)
        console.log("SHOW STAMP: ", y)
        return x
      }
    async CreatingToken (){
        CrToken.set(true)
    }
}
export class InsuredPartyInterface extends Participants{
    constructor(ctx){
        super(ctx)
    }
    async Evaluate (risk){
        this.risk = {
            "Model": risk.Model,
            "Year":risk.Year,
            "InsuredParty":this.account.getAddress(),
            "Licence_plate":risk.LicencePlate,
            "Vehicle_purpose":risk.VehiclePurpose,
            "Insurance_provided":risk.InsuranceType,
            "Valuation":stdlib.parseCurrency(risk.Valuation,4),
            "Kyc":risk.KYC
        }
        console.log("RISK: ", this.risk)
        this.contract.p.InsuredParty(this)
        return this.risk
    }
    async Insure (){
        console.log("Insuring")
        return this.risk
      }
    async PayInsurance (i){
        console.log("PAY AMOUNT: ", stdlib.formatCurrency(i))
        InsuranceAmount.set(stdlib.formatCurrency(i))
        const accept = new Promise((resolve, reject) => {
            AcceptAndPay.subscribe(val => {
                console.log("WAITING: ",val)
                if(val){
                    console.log("VAL?",val)
                    this.AcceptAndPay = val
                    resolve(this.AcceptAndPay)
        }})})
        if(!this.AcceptAndPay){
            await accept
        }
        return this.AcceptAndPay
    }
    async GetExpiry(){
        const [hasExpired, expiry,owned] = await this.contract.a.CheckExpiry.check(0)
        if(owned){
            console.log("Has expired: ", hasExpired)
            console.log("Expiry: ", stdlib.bigNumberToNumber(expiry))
            return [hasExpired,stdlib.bigNumberToNumber(expiry),owned]
        }else{
            return "You don't own this asset"
        }
    }
    async PlaceClaim(cl){
        const [canClaim,claim] = await this.contract.a.CheckExpiry.PlaceClaim(cl)
        if(canClaim){
            console.log("Has claimed: ", canClaim)
            console.log("Claim: ", stdlib.formatCurrency(claim))
            return [canClaim,stdlib.formatCurrency(claim)]
        }else{
            return [canClaim]
        }
    }
    async TokenDestroyed(){
        console.log("TOKEN HAS BEEN DESTROYED")
    }
}