import * as backend from '../build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import {AcceptAndPay,InsuranceAmount} from "./store/pStore"
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const stdlib =  loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));

class Participants {
    constructor(CtxInfo){
        this.CtxInfo = CtxInfo
    }
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
    async ShowPolicy (tkn) {
        this.account.tokenAccept(tkn)
        console.log("TOKEN: ", tkn)
    }
}
export class InsurerInterface extends Participants{
    constructor(){
        super(undefined)
    }
    async StartingBalance (){
        return [stdlib.parseCurrency(20,4),10]
    }
    async Insure (){
        this.contract.p.Insurer(this)
        return JSON.stringify(await this.contract.getInfo())
    }
    async ShowMeta (x,y) {
        console.log("SHOW DIGEST: ", x)
        console.log("SHOW DIGEST: ", x.substring(0,31))
        console.log("SHOW STAMP: ", y)
        return [x]
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
}