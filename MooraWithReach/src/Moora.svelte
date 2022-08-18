<script>
import { afterUpdate,onDestroy } from "svelte";
import {resetHand,playerHand, contractReady} from "./stores/AStore"
import Alice from "./Alice.svelte";
import Bob from "./Bob.svelte";
    export let who 
    let hand
    let shout
    let rstHand = true
    let ctR = false
    who == "Bob" ? ctR = true : ctR = false
    const callForm = () => {
        console.log("HAND: ",hand)
        console.log("SHOUT: ",shout)
        if(rstHand)playerHand.set(hand,shout)
        rstHand = false
    }

afterUpdate(() => {
    hand = hand
    shout = shout
})
const unsub = contractReady.subscribe(val => {
    if(val)ctR = val
})
const unsubscribe = resetHand.subscribe((val) => {
    console.log("Reset hand:",val )
        if(val == "reset"){
            rstHand = true
            hand = 0
            shout = 0
        }
    })
    onDestroy(unsubscribe,unsub)
</script>

{#if who == "Alice"}
<Alice {hand} {shout}></Alice>
{/if}
{#if who == "Bob"}
<Bob {hand} {shout}></Bob>
{/if}
{#if ctR}
<form on:submit|preventDefault={callForm}>
    <label for="raise_hand"> Raise</label>
    <input type="number" id="raise_hand" bind:value={hand} placeholder=0/>
    <label for="your_hand"> SHOUT</label>
    <select name="your_hand" id="your_hand" bind:value={shout} placeholder=0>
        <option value=1  >ONE  </option>
        <option value=2  >TWO  </option>
        <option value=3  >THREE</option>
        <option value=4  >FOUR </option>
        <option value=5  >FIVE </option>
        <option value=6  >SIX  </option>
        <option value=7  >SEVEN</option>
        <option value=8  >EIGHT</option>
        <option value=9  >NINE </option>
        <option value=10 >TEN  </option>
    </select>
    <button type="submit">SUBMIT</button>
</form>
{/if}
