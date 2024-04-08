<script lang="ts">
import { onMount } from "svelte";
import Account from '$lib/account';
import type { AccountData } from '$lib/account';

import type { AlloRequest, AlloSubmit } from '$lib/allo';
import Allo from '$lib/allo';
import type { FormEventHandler } from "svelte/elements";
    import Auth from "$lib/auth";

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

let allos: AlloRequest[] = [{taskId: 1, quantity: 30}];
let requestText: string = "";

onMount(async () => {
	allos = Allo.getSavedAlloRequests();
  console.log("allos:")
  console.log(allos);

	data = Account.getSavedAccountData();
});

function submit(e: SubmitEvent) {
  e.preventDefault();
  const token = Auth.getToken();

  if (!token)
    throw new Error('You must be auth')

  console.log(data);
  if (data && data.city && data.tel && data.address) {
    const submitData: AlloSubmit = {
      city: data.city,
      phone: data.tel,
      address: data.address,
      requestText,
      allos,
    };
    console.log(submitData);

    Allo.submitAllo(token, submitData);
  }
  else {
    console.error("Data is missing data for submition : ")
    console.error(data)
  }

}
</script>


<section class="container">
	<h1>Submit</h1>

  {#if allos && allos.length > 0}
	<div class="submit-container">
		<div class="allos">
			<h2>Résumé de la commande</h2>

			<ul>
				{#each allos as allo}
					<li>
						<p>ID: {allo.taskId}</p>
						<p>Quantité {allo.quantity}</p>
					</li>
				{/each}
			</ul>
		</div>

		{#if data !== null}
			<form action="" on:submit={submit} class="submit-form">
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
					<input type="text" required bind:value={data.address} on:change={ saveData } name="place" id="place" placeholder="Ex: 1 rue de l'enseirb">
				</div>

				<div class="city">
					<label for="city">Ville: </label>
					<input type="text" required bind:value={data.city} on:change={ saveData } name="city" id="city" placeholder="Ex: Talence">
				</div>

				<div class="additional">
					<label for="additional">Autre informations (max 200 caractères): </label>
					<textarea name="additional" bind:value="{requestText}" id="additional" maxlength="200" placeholder="Ex: Nemo est super cool !" ></textarea>
				</div>

				<input type="submit" required value="Envoyer ma demande" class="submit-button">
			</form>
		{/if}
	</div>
  {:else}
    <div class="command-container">
      <p>Veuillez d'abord <a href="/commandeAllo#commandeAllo">commander des allos</a></p>
    </div>
  {/if}
</section>


<style lang="scss">
@import '$lib/theme.scss';

.command-container {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

	width: 100%;
	min-height: 100svh;

  p {
    font-size: 2.5rem;
  }
}

.container {
	padding: 0 5rem 5rem;
	box-sizing: border-box;

	width: 100vw;
	min-height: 100svh;
	background-color: $background;


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
}

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

	.tel, .mail, .place, .city, .additional {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0rem 1rem;
	}

	.additional {
		textarea {
			resize: none;
			width: 100%;
			height: 10rem;
			padding: .5rem;
		}
	}

	input, label, textarea {
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


@media screen and (max-width: 899px) {
	.container {
		h1 {
			z-index: 500;
			padding: 2rem 0rem;
			position: relative;

			left: 0;
			width: auto;
			text-align: center;
		}
	}
}

</style>
