<script>
import A from "./A.svelte";
import B from "./B.svelte";

import Moora from "./Moora.svelte";

    let start = false
    let accept = false
    let newChallenge = true
</script>

{#if newChallenge}
<p id="intro">
    Welcome to the Moora game, here's how to play : 
</p>
<note>
    This game requires a minimum of 2 participants.
</note>
<instructions>
    One player will place a wager,
    other players can accept the wager.
    All players throw out a single hand, 
    each showing zero to five fingers,
    and call out their guess at what the sum of all fingers shown will be. 
    If one player guesses the sum, that player earns one point. 
    The first player to reach three points wins the game and the bet.
</instructions>
<button id="start_challenge" on:click={()=>{ start = true; newChallenge = false}}> Place Wager </button>
<button id="accept_challenge" on:click={()=>{ accept = true; newChallenge = false}}> Accept Wager</button>
{:else}
<button on:click={()=>{newChallenge = true}} >NEW CHALLENGE</button>
{#if start}
<A/>
{/if}
{#if accept}
<B/>
{/if}

{/if}
<style>
    p#intro {
    font-weight: 700;
    text-align: left;
}
note {
    font-weight: 100;
    font-size: small;
    text-align: left;
}
instructions {
    display: block;
    font-family: monospace;
    -webkit-text-stroke: thin;
    text-align: justify;
}
</style>