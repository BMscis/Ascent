<script>
import { onDestroy } from "svelte";
import {Alice} from "./reachParticipants.js"
import { playerHand } from "./stores/AStore.js";
    export let hand
    export let shout
    let alice
    let wager = 0
    let yourName = ''
    let deploy = false
    let placewager = false
    const callAlice = async () => {
        alice = new Alice(yourName)
        placewager = true}
    const sendWager = async () => {
        alice.placeWager(wager,hand,shout)
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
{#if !placewager}
<form on:submit|preventDefault={callAlice}>
    <label for="your_name"> What is your name ?</label>
    <input type="text" id="your_name" bind:value={yourName}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if placewager }
<form on:submit|preventDefault={sendWager}>
    <label for="place_wager"> How much do you wage ?</label>
    <input type="number" id="place_wager" bind:value={wager}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if deploy}
{#await alice.deploy()}
    <div>Loading</div>
{:then result}
<p>Copy this to Bob</p>
    <textarea>
        {result}
    </textarea>
{/await}
{/if}