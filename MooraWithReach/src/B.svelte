<script>
    import { onDestroy } from "svelte";
    import {Bob} from "./reachParticipants.js"
    import { playerHand,gameR, resetHand,aWager, bobAcceptWager,wHTG } from "./stores/AStore.js";
    let ctx
    let bob
    let hand
    let shout
    let accept
    let awaitContract = false
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
    let copyContract = false
    const callBob = async() =>{
        nameSet = true
        bob = new Bob(yourName)
        copyContract = true
    }
    const place = async() =>{
        const placed = bob.getInfo(ctx)
        awaitContract = placed
        deploy = true

    }
    const run = async()=>{
        contract = await bob.deploy()
        return contract
    }
    const callForm = () => {
        console.log("HAND: ",hand)
        console.log("SHOUT: ",shout)
        playerHand.set([hand,shout])
        rstHand = false
    }
    const sendContract = ()=>{
        aWager.set(accept)
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
            //isGameR = val
        }
        resetHand.set()
        } catch (error) {
            
        }
    })
    const unsubWHTG = wHTG.subscribe(val =>{
        if(val){
           if(round > 3){
            if(val == "B")whoWonTheGame = "You"
            else whoWonTheGame = val
           }
           else{
            if(val == "B")whoWon = "You"
            else whoWon = val
           }
        }
    })
    
    const unsubBobAccW = bobAcceptWager.subscribe(val=>{
        if(val)wager = val
    })
//Place wager/Accept
//What is your yourName
//accept wager
//get contract
//round 
//place hand and call
//get result
//repeat round
</script>
{#if !nameSet}
<form on:submit|preventDefault={callBob}>
    <label for="your_name"> What is your name ?</label>
    <input type="text" id="your_name" bind:value={yourName}/>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if copyContract }
<form on:submit|preventDefault={place}>
    <label for="copy_contract"> Copy the contract here</label>
    <input type="text" id="copy_contract" bind:value={ctx}>
    <button type="submit">SUBMIT</button>
</form>
{/if}
{#if awaitContract}
{#if !wager}
<div>Waiting for wager</div>
{:else}
<div id="wager">The wager is {wager}</div>
<form on:submit|preventDefault={sendContract}>
    <label for="accept_wager"> Accept Wager ?</label>
    <select name="accept_wager" id="accept_wager" bind:value={accept}>
    <option value="True"  >Accept</option>
    <option value="False" >Decline</option>
</select>
<button type="submit">SUBMIT</button>
</form>
{/if}
{/if}
{#if deploy }
{#await run()}
    <div>Loading game</div>
{:then result} 
<p>results</p>
{#if round >= 4}
<h2>Game OVER!</h2>
{:else}
<h2>Round : {round}</h2>
{/if}
{#if whoWon}
{#if whoWon == "Draw"}
<h3>That won't count, no one won. Let's try again.</h3>
{:else}
<h3>{whoWon} won that round</h3>
{/if}

{/if}
{#if whoWonTheGame}
{#if whoWon == "Draw"}
<h3>It ended in a draw</h3>
{:else}
<h3>{whoWonTheGame} won the game</h3>
{/if}
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
<style>
    div#wager {
    font-weight: 700;
    color: blue;
}
</style>