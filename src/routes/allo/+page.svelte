<script lang="ts">
import AlloCard from "./alloCard.svelte";
import AlloHero from "./alloHero.svelte";

import type { Allo } from "$lib/api";
import Allos from "$lib/allo";

import Auth from "$lib/auth";
import { onMount } from "svelte";
import LoginButton from "$lib/login-button.svelte";

let allos: Allo[] = [];

let token: string = "";
onMount(async () => {
	token = Auth.getToken() ;
	if (token === '')
		throw new Error('Need auth to get allos history');

	allos = await Allos.getAllos(token) || [];
	console.log(allos);
});

</script>


<AlloHero />

<section id="allo">
	{#if token === ""}
		<div class="no-auth">
			<h2>Authentifiez vous pour accéder à l'historique des demandes !</h2>
			<LoginButton />
		</div>

	{:else}
	<div class="tmp">
		<p>
			L'historique marche pas, pas de chance
		</p>
		<p>
			¯\_(ツ)_/¯
		</p>
	</div>
		<!-- <ul class="allos-list"> -->
		<!-- 	{#each allos as allo} -->
		<!-- 		<li> -->
		<!-- 			<AlloCard allo={allo} /> -->
		<!-- 		</li> -->
		<!-- 	{/each} -->
		<!-- </ul> -->
	{/if}
</section>


<style lang="scss">
@import '$lib/theme.scss';

.tmp {
	font-size: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	height: 100vh;
}

.no-auth {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	min-height: 100svh;
	gap: 5rem;

	padding: 2rem;
	box-sizing: border-box;

	h2 {
		font-size: 3rem;
		text-align: center;
	}
}

#allo {
	background-color: $alt-background;
	position: relative;

	min-height: 100svh;
}

@media screen and (max-width: 899px) {

.allos-list {
	padding: 5vw 0vw;
	gap: 5vw;

	display: flex;
	flex-wrap: wrap;

	justify-content: center;

	li {
		width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
	}
}


}


@media screen and (min-width: 900px) {

.allos-list {
  padding: 5vw 10vw;
  gap: 5rem 3rem;

	background-color: $alt-background;

  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  justify-content: flex-start;
}
}

</style>
