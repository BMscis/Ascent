<script>
import { afterUpdate } from "svelte";

import InsuredInterface from "./InsuredInterface.svelte";
import InsuredParty from "./InsuredParty.svelte";

	export let participant = -1;

	afterUpdate(()=>{
		participant = participant
	})
</script>

<main>
	<label for="participant">Select A Participant</label>
	<select id="participant" bind:value={participant}>
		<option value=0>Deploy Insurance</option>
		<option value=1> Insure Risk</option>
	</select>
	{#if participant == 0}
	<InsuredInterface></InsuredInterface>
	{/if}
	{#if participant == 1}
	<InsuredParty></InsuredParty>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	label {
		color: #ff3e00;
		text-transform: uppercase;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>