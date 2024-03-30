
<script lang="ts">
import { onMount } from "svelte";

interface alloPreRequest {
	id: number;
	quantity: number;
}

let allos: alloPreRequest[] = [{id: 1, quantity: 30}];

onMount(() => {
	const allos_raw = JSON.parse(sessionStorage.getItem('allo_request') || "{}");

	for (let key in allos_raw) {
		allos = [...allos, allos_raw[key]];
	}

	console.log(allos);
});

</script>


<section class="container">
	<h1>Submit</h1>

	<div class="allos">
		{#each allos as allo}
			<p>ID: {allo.id}</p>
			<p>Quantité {allo.quantity}</p>
		{/each}
	</div>

	<form action="/">
		<div class="mail">
			<label for="mail">mail: </label>
			<input type="email" name="mail" id="mail" value="ndacremont@enseirb-matmeca.fr" placeholder="Ex: mail@enseirb-matmeca.fr" required>
		</div>

		<div class="tel">
			<label for="tel">tel: </label>
			<input type="tel" maxlength="10" name="tel" id="tel" value="0723913845" placeholder="Ex: 0123456789" required>
		</div>

		<div class="place">
			<label for="place">Adresse: </label>
			<input type="text" name="place" id="place" value="Ma rue" placeholder="Ex: 1 rue de l'enseirb, Pessac" required>
		</div>

		<div class="city">
			<label for="city">Ville: </label>
			<input type="text" name="city" id="city" value="" placeholder="Ex: Talence" required>
		</div>

		<input type="submit" value="Envoyer ma demande">
	</form>

</section>

<style lang="scss">
@import '$lib/theme.scss';

section {
	width: 100vw;
	height: 100svh;


}

h1 {
	font-size: 5rem;
	pointer-events: none;

	z-index: 500;
	padding-top: 2rem;
	position: relative;

	text-shadow: $foreground 0 0 .2rem;
	left: 5%;
	width: 50%;
}

</style>

