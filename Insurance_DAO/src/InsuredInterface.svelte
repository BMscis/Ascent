<script>
import {InsurerInterface} from "./participants"
import { CrToken, NewToken } from "./store/pStore";

let dp = false
let IA
let newToken
let crToken
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