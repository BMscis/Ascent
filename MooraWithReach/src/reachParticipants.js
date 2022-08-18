import * as backend from '../build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib';
import {resetHand,playerHand, contractReady,gameR, aWager, bobAcceptWager, wHTG} from './stores/AStore'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const stdlib =  loadStdlib("ALGO")
stdlib.setWalletFallback(stdlib.walletFallback({
    providerEnv: "TestNet", MyAlgoConnect }));

const handA = [3,6,5,6,7]
const handB = [3,2,3,4,2]
const callA = [6,9,8,4,9]
const callB = [3,8,3,6,1]
const getNum = () => Math.floor(Math.random() * 10)
const getHNum = () => Math.floor(Math.random() * 5)
let Hnum = 0
let Cnum = 0
const winner = (x) =>{
    switch (x) {
        case 'A':
          wHTG.set("A")
          console.log("Alice won")
          break;
        case 'B':
          wHTG.set("B")
          console.log("B won")
          break;
        case 'D':
            wHTG.set("D")
          console.log("DRAW")
          break;
      }
}
class Participants {
    constructor(name){
        this.name = name
    }

    random() { return stdlib.hasRandom.random(); }

    async getHand (){
        playerHand.set()
        gameR.set(true)
        const hand = await new Promise(resolve =>{
            playerHand.subscribe((hn) => {
                if(hn){
                    console.log(this.name, "has shown ", hn[0] , "finger")
                    this.hand = hn[0]
                    this.sht = hn[1]
                    resolve(this.hand)
                }
            })
        })
        if(!this.hand){
            await hand
        }
        return this.hand
    }  
    async shout (calledNum) {
        console.log(this.name, "has shouted ", this.sht )
        return this.sht
    }
    async timeout(){
        console.log("TIMES UP")
        exit()
    }
    async showWinner (x) {
        winner(x)
      }
    async roundWinner (x,y) {
        resetHand.set('reset')
        winner(y)
        playerHand.set()
        gameR.set(false)
        console.log(y , " has won that round : ",stdlib.bigNumberToNumber(x))
      }
    async gameReady(){
        //if(this instanceof Alice)gameR.set(true)
    }
}

export class Alice extends Participants{
    constructor(name){
        super(name)
    }
    async placeWager (x) {
        this.wager = stdlib.parseCurrency(x)
        return true
    }
    async deploy() {
        this.account = await stdlib.getDefaultAccount()
        this.contract = await this.account.contract(backend)
        this.contract.p.Alice(this)
        this.contractINFO = JSON.stringify(await this.contract.getInfo())
        return this.contractINFO
    }
}
export class Bob extends Participants{
    constructor(name){
        super(name)
    }
    async getInfo (contractINFO) {
        this.contractINFO = contractINFO
        return true
    }
    async AcceptWager (wgr) {
        const accept = new Promise((resolve, reject) => {
            bobAcceptWager.set(stdlib.formatCurrency(wgr,4))
            aWager.subscribe(val => {
                console.log("WAITING: ",val)
                if(val){
                    console.log("VAL?",val)
                    this.acceptwager = val
                    resolve(this.acceptwager)
                }
                
            })
            
        })
        if(!this.acceptwager){
            console.log("IF waiting: ")
             await accept}
        if( this.acceptwager === "True") this.acceptwager = true
        if( this.acceptwager === "False") this.acceptwager = false
        return this.acceptwager
    }
    async deploy() {
        this.account = await stdlib.getDefaultAccount()
        this.contract = this.account.contract(
            backend,
            JSON.parse(this.contractINFO)
        )
        this.contract.p.Bob(this)
    }   
}