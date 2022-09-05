<script>
import {InsurerInterface} from "./participants"
import { AcceptAddFunds, CrToken, IncreaseFunds, NewToken } from "./store/pStore";

let dp = false
let IA
let newToken
let crToken
let addfund = false
let funds = 0
let balance = 0
let makePay = -1
const dpl =async () => {
    IA = new InsurerInterface()
    await IA.deploy()
    dp = true
}
const insure = async () => {
    IA = new InsurerInterface()
    await IA.deploy()
}
const unsub = NewToken.subscribe(val => {
    if(val){newToken = true}
})
const unsubC = CrToken.subscribe(val => {
    if(val){crToken = true}
})
const unsubI = IncreaseFunds.subscribe(val => {
    if(val){
        funds = val[1]
        balance = val[0]
        addfund = true
    }
})
const AddFunds = async () =>{
    makePay == 0 ? AcceptAddFunds.set(true) : AcceptAddFunds.set(false)
}
</script>
<button on:click={() => { dpl() }}>Deploy</button>
{#if dp}
{#await IA.Insure()}
<div>Loading</div>
{:then result} 
    <p> Copy this contract info.</p>
    <textarea>{result}</textarea>
{/await}
{/if}
{#if crToken && !newToken}
<h3>Creating new policy.</h3>
{/if}
{#if newToken}
<h3>New Insurance has been deployed.</h3>
{/if}
{#if addfund}
<h3>Current Balance of {balance} Algos is not enough to run the insurance</h3>
<h4>Please add {funds} Algos to continue insuring</h4>
<form on:submit|preventDefault={AddFunds}>
    <select bind:value={makePay}>
        <option value=0>PAY</option>
        <option value=1>MAYBE LATER</option>
    </select>
    <button type="submit">SUBMIT</button>
    </form>
{/if}