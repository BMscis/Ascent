<script>
    import { onDestroy } from "svelte";
    import {Bob} from "./reachParticipants.js"
    import { playerHand } from "./stores/AStore.js";
    export let hand
    export let shout
    let acceptWager = false
    let copyContract = ''
    let bob
    let deploy = false
    let yourName = ''
    let checkWager = false
    let accept
    const callBob = async() => {
        bob = new Bob(yourName)
        checkWager = true
    }
    const sendContract = async() => {
        await bob.getInfo(copyContract,accept,hand,shout)
        deploy = true
    }
    const unsub = playerHand.subscribe(val => {
        if(val){
            hand = val[0]
            shout = val[1]
        }
    })
    onDestroy(unsub)
</script>
<h1>Hello {yourName} !</h1>
{#if !checkWager}
<form on:submit|preventDefault={callBob}>
    <label for="your_name"> What is your name ?</label>
    <input type="text" id="your_name" bind:value={yourName}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if checkWager }
<form on:submit|preventDefault={sendContract}>
    <label for="copy_contract"> Copy the contract here</label>
    <input type="text" id="copy_contract" bind:value={copyContract}>
    <label for="accept_wager"> Accept Wager ?</label>
    <select name="accept_wager" id="accept_wager" bind:value={accept}>
        <option value="True"  >Accept</option>
        <option value="False" >Decline</option>
    </select>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if deploy}
{#await bob.deploy()}
    <div>Loading</div>
{:then Result} 
    <div>Waiting for Results</div>
{/await}
{/if}