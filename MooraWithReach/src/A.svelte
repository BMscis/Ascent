<script>
    import { onDestroy } from "svelte";
    import {Alice} from "./reachParticipants.js"
    import { playerHand,gameR, resetHand,wHTG } from "./stores/AStore.js";
    let alice
    let hand
    let shout
    let wager
    let whoWon
    let whoWonTheGame
    let deploy
    let rstHand = true
    let round = 1
    let contract
    let yourName
    let isGameR = false
    let nameSet = false
    let placeWager = false
    const callAlice = async() =>{
        nameSet = true
        alice = new Alice(yourName)
        placeWager = true
    }
    const place = async() =>{
        const placed = alice.placeWager(wager)
        deploy = placed
    }
    const run = async()=>{
        contract = await alice.deploy()
        return contract
    }
    const callForm = () => {
        console.log("HAND: ",hand)
        console.log("SHOUT: ",shout)
        if(rstHand)playerHand.set([hand,shout])
        rstHand = false
    }
    const unsubGame = gameR.subscribe(val =>{
        if(val != undefined || val != null)isGameR = val
    })
    const unsubReset = resetHand.subscribe(val =>{
        try {
            if(val == "reset"){
            round += 1
            rstHand = true
            hand=undefined
            shout=undefined
        }
        resetHand.set()
        } catch (error) {
            
        }
    })
    const unsubWHTG = wHTG.subscribe(val =>{
        if(val){
           if(round > 3){
            if(val == "A")whoWonTheGame = "You"
            else whoWonTheGame = val
           }
           else{
            if(val == "A")whoWon = "You"
            else whoWon = val
           }
        }
    })
//Place wager/Accept
//What is your yourName
//place wager
//get contract
//round 
//place hand and call
//get result
//repeat round
</script>
{#if !nameSet}
<form on:submit|preventDefault={callAlice}>
    <label for="your_name"> What is your name ?</label>
    <input type="text" id="your_name" bind:value={yourName}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if placeWager }
<form on:submit|preventDefault={place}>
    <label for="place_wager"> How much do you wage ?</label>
    <input type="number" min=3 id="place_wager" bind:value={wager}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if deploy }
{#await run()}
    <div>Loading game</div>
{:then result} 
<p>Copy this to Bob</p>
<textarea>
    {result}
</textarea>
{#if round >= 4}
<h2>Game OVER!</h2>
{:else}
<h2>Round : {round}</h2>
{/if}
{#if whoWon}
<h3>{whoWon} won that round</h3>
{/if}
{#if whoWonTheGame}
<h3>{whoWonTheGame} won the game</h3>
{/if}
{#if isGameR}

<form on:submit|preventDefault={callForm}>
    <label for="raise_hand"> Raise</label>
    <input type="number" min=0 max=5 id="raise_hand" bind:value={hand} placeholder=0/>
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
{/await}
{/if}