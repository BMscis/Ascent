<script>
import {InsuredPartyInterface} from "./participants"
import {AcceptAndPay,CE,InsuranceAmount, TokenSent} from "./store/pStore"
let IP
let Model
let Year
let LicencePlate
let VehiclePurpose
let InsuranceType
let Valutaion
let KYC
let Ctx
let AwaitPayment = false
let payment = 0
let makePay
let checkExpiry = false
let getExpiry = false
let tokenSent = false
const insure = async () => {
    const risk = {
        "Model": Model,
        "Year": Year,
        "LicencePlate":LicencePlate,
        "VehiclePurpose":VehiclePurpose,
        "InsuranceType":InsuranceType,
        "Valuation":Valutaion,
        "KYC":KYC,
        "Info":Ctx
    }
    IP = new InsuredPartyInterface(Ctx)
    await IP.deploy()
    const rsk = await IP.Evaluate(risk)
}
const payInsurance = async () => {
    makePay = makePay == "True" ? true : false
    AcceptAndPay.set(true)
}
const unsub = InsuranceAmount.subscribe((val)=> {
    if(val){
        AwaitPayment = true
        payment = val
    }
})
const unsubC = CE.subscribe(val => {checkExpiry = val})
const unsubT = TokenSent.subscribe(val => {
    if(val){tokenSent = true}
})
</script>
{#if !AwaitPayment}
<form on:submit|preventDefault={insure}>
    <label for="Model"> Model Of the car </label>
    <input id="Model" type="text" bind:value={Model}/>
    <label for="Year"> Make Year</label>
    <input id="Year" type="number" bind:value={Year}/>
    <label for="Licence Plate"> Licence Plate </label>
    <input id="Licence Plate" type="text" bind:value={LicencePlate}/>
    <label for="Vehicle Purpose">Vehicle Purpose</label>
    <select id="Vehicle Purpose" bind:value={VehiclePurpose}>
        <option value=0>PRIVATE</option>
        <option value=1>COMMERCIAL</option>
        <option value=2>MOTORCYLCE</option>
    </select>
    <label for="Insurance Type">Insurance Type</label>
    <select id="Insurance Type" bind:value={InsuranceType}>
        <option value=0>THIRDPARTY</option>
        <option value=1>COMPREHENSIVE</option>
    </select>
    <label for="Valutaion" >Car Value</label>
    <input id="Valutaion" type="number" bind:value={Valutaion}/>
    <label for="KYC">Log book link</label>
    <input id="KYC" type="text" bind:value={KYC}/>
    <label for="Copy Contract">Copy the Contract</label>
    <input id="Copy Contract" type="text" bind:value={Ctx}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if AwaitPayment && !checkExpiry}
<div>Here's your insurance quote</div>
<h3>Pay: </h3><h2>{payment}</h2>
<form on:submit|preventDefault={payInsurance}>
<select bind:value={makePay}>
    <option value="True">PAY</option>
    <option value="False">MAYBE LATER</option>
</select>
<button type="submit">SUBMIT</button>
</form>
{/if}
{#if tokenSent}
<h4>Check your wallet in a few, your insurance has been sent</h4>
{/if}
{#if checkExpiry}
<button on:click={()=>{getExpiry = !getExpiry}}> Check Expiry </button>
{#if getExpiry}
{#await IP.GetExpiry()}
    <div>Checking Expiry...</div>
{:then result}
    {#if result == "You don't own this asset"}
    <div>"You don't own this asset"</div>
    {:else}
    <div>Your insurance {result[0] ? "has" : "has not"} expired</div>
    <div>It {result[0] ? "expired" : "will expire"} on {result[1]}</div>
    {/if}
{/await}
{/if}
{/if}