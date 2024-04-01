<script lang="ts">
import { onMount } from "svelte";
import Account from '$lib/account';
import type { AccountData } from '$lib/account';

interface alloPreRequest {
	id: number;
	quantity: number;
}

let data: AccountData | null = null;

const formatMail = (mail: string): string => {
	const mailRegExp = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

	if (mailRegExp.test(mail))
		return mail;

	return '';
}

const formatTel = (tel: string): string => {
	const telRegExp = /^(0|\+\d{1,3})\d{9}$/;

	if (telRegExp.test(tel))
		return tel;

	return '';
}

const saveData = () => {
	console.log("save data !");
	console.log(data);
	if (data === null)
		return;

	const newData = {
		...data,
		mail: formatMail(data.mail),
		tel: formatTel(data.tel),
	};

	data = newData;
	Account.saveAccountData(data);
}

let allos: alloPreRequest[] = [{id: 1, quantity: 30}];

onMount(async () => {
	const allos_raw = JSON.parse(sessionStorage.getItem('allo_request') || "{}");

	for (let key in allos_raw) {
		allos = [...allos, allos_raw[key]];
	}

	data = Account.getSavedAccountData();
});

</script>


<section class="container">
	<h1>Submit</h1>

	<div class="submit-container">
		<div class="allos">
			<h2>Résumé de la commande</h2>

			<ul>
				{#each allos as allo}
					<li>
						<p>ID: {allo.id}</p>
						<p>Quantité {allo.quantity}</p>
					</li>
				{/each}
			</ul>
		</div>

		{#if data !== null}
			<form action="/" class="submit-form">
				<h2>Informations de livraison</h2>

				<div class="mail">
					<label for="mail">mail: </label>
					<input type="email" bind:value={data.mail} on:change={ saveData } name="mail" id="mail" placeholder="Ex: mail@enseirb-matmeca.fr">
				</div>

				<div class="tel">
					<label for="tel">tel: </label>
					<input type="tel" required bind:value={data.tel} on:change={ saveData } maxlength="10" name="tel" id="tel" placeholder="Ex: 0123456789">
				</div>

				<div class="place">
					<label for="place">Adresse: </label>
					<input type="text" required bind:value={data.address} on:change={ saveData } name="place" id="place" placeholder="Ex: 1 rue de l'enseirb, Pessac">
				</div>

				<div class="city">
					<label for="city">Ville: </label>
					<input type="text" required bind:value={data.city} on:change={ saveData } name="city" id="city" placeholder="Ex: Talence">
				</div>

				<input type="submit" required value="Envoyer ma demande" class="submit-button">
			</form>
		{/if}
	</div>

</section>

<style lang="scss">
@import '$lib/theme.scss';

.submit-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
}

.submit-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: min(25rem, calc(90vw - 4rem));
	background-color: $alt-background;
	border-radius: .2rem;
	padding: 3rem 2rem;

	.tel, .mail, .place, .city {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0rem 1rem;
	}

	input, label {
		font-size: 1.5rem;
		font-family: 'fanwood-master', cursive;
	}

	input {
		padding: .5rem;
		border: 0;
		border-radius: .2rem;
		background-color: $foreground;
		color: $background;
	}

	.submit-button {
		margin-top: 1rem;
		padding: 1rem;
		cursor: pointer;
		transition: color .2s ease-in-out, background-color .2s ease-in-out;

		&:hover {
			color: $foreground;
			background-color: $darker-background;
		}
	}
}

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

