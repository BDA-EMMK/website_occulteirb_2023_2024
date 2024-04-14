
<script lang="ts">
import RequestAlloCard from './requestAlloCard.svelte';
import AlloHero from "../allo/alloHero.svelte";

import type { AlloTask } from '$lib/allo';
import AlloAPI from '$lib/allo';
import { onMount } from "svelte";

let allos: AlloTask[] = [];

onMount(async () => {
	const tmp = await AlloAPI.getAvailableAllos();
	console.log("Allos dispo :")
	console.log(tmp)

	allos = tmp ? tmp: [];
});
</script>

<AlloHero />

<section id="commande-allo">
<ul class="allos-list">
  {#each allos as allo}
		{#if allo.accessible}
			<li>
				<RequestAlloCard allo={allo} />
			</li>
		{/if}
  {/each}
</ul>
</section>


<style lang="scss">
@import '$lib/theme.scss';

#commande-allo {
	background-color: $alt-background;

	min-height: 100svh;
}

.allos-list {
  padding: 5vw 10vw;
  gap: 5vw;

  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
}


@media screen and (max-width: 899px) {
  .allos-list {
    padding: 5vw 0vw;
    gap: 5vw;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;

  }
}

</style>

