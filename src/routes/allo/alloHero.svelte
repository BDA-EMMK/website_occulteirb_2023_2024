

<script lang="ts">
import auth from '$lib/auth';
import { onMount } from 'svelte';
import LoginButton from "$lib/login-button.svelte";

let token: undefined | string = undefined;

onMount(() => {
	token = auth.getToken();
});

</script>


<section class="allo-hero">
<h1>
  Les Allos !
</h1>

<div class="message">
	<p>Quelques demandes de notre part :</p>
	<ul>
		<li>Si vous pensez qu'il y a un problème avec votre commande, contacter @NemoDacremont sur télégram</li>
	</ul>
</div>

<div class="hero-content">
	{#if token === undefined}
		<p>Loading</p>

	{:else if token === ""}
		<LoginButton />

	{:else}
		<a href="/submit/" class="submit-link">
			<h2>Envoyer la demande</h2>
		</a>
	{/if}

	<div class="links">
		<a href="/commandeAllo/#commande-allo">
			<h2>Commander des allos</h2>
		</a>

		<a href="/allo/#allo">
			<h2>Historique des commandes</h2>
		</a>
	</div>
</div>

</section>


<style lang="scss">
@import '$lib/theme.scss';

.message {
	ul {
		padding-left: .5rem;
		list-style: " — " inside;
	}
	max-width: 60ch;
	font-family: fanwood-master, serif;
	font-size: 2rem;
}


.allo-hero {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	background-color: $background;
	min-height: 100svh;

	.links, h1 {
		position: relative;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	h1 {
		z-index: 500; /* do not get blrured by header */
		pointer-events: none;
		width: 90%;

		padding-top: 2rem;
		font-size: 4rem;
		text-shadow: $foreground 0 0 .2rem;
	}

	h2 {
		font-size: 3rem;
		text-align: center;
	}

	/*
	a {
		text-decoration: none;
	}
	*/
}

@media screen and (min-width: 900px) {
.hero-content {
	width: 100%;
	padding: 4rem 0 10svh 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	flex-wrap: wrap;
}

h1 {
	text-align: left;
}
}

@media screen and (max-width: 899px) {
.allo-hero {
	padding: 0rem 10vw;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		font-size: 5rem;
	}

	.hero-content {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		gap: 3rem;
		padding: 3rem 0;
	}

	.links, h1 {
		position: relative;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	h1 {
		font-size: 5rem;
		text-align: center;
		text-shadow: $foreground 0 0 .2rem;

		margin-top: 5svh;
	}

	h2 {
		font-size: 3rem;
		text-align: center;
	}

	/*
	a {
		text-decoration: none;
	}
	*/
}
}
</style>

