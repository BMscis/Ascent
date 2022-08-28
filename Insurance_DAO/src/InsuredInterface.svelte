<script>
import {InsurerInterface} from "./participants"

let dp = false
let IA
const dpl =async () => {
    IA = new InsurerInterface()
    await IA.deploy()
    dp = true
}
const insure = async () => {
    IA = new InsurerInterface()
    await IA.deploy()
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