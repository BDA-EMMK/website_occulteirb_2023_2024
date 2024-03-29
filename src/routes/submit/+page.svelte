
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

	{#each allos as allo}
		<p>ID: {allo.id}</p>
		<p>Quantité {allo.quantity}</p>
	{/each}
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
}

</style>

