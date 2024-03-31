
<script lang="ts">
import auth from '$lib/auth';
import api from '$lib/api';
import LoginButton from '$lib/login-button.svelte';
import { onMount } from 'svelte';

import Account from '$lib/account';
import type { AccountData } from '$lib/account';
import account from '$lib/account';

let data: AccountData | null = null;
let token: string | null = null;

onMount(async () => {
	// if redirected from cas
	const url = new URL(window.location.href);

	if (url.searchParams.has('token')) {
		sessionStorage.setItem('token', url.searchParams.get("token") as string);
	}

	token = auth.getToken();
	const fetchedData = await Account.fetchAccountData();
	data = Account.getSavedAccountData();

	if (fetchedData === null)
		return;

	data = {
		...data,
		rank: fetchedData.rank,
		points: fetchedData.points,
	}
	account.saveAccountData(data);
});


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

const forceRefresh = () => {
	token = null;
}
</script>


<section class="account">
	<h1>Mon Compte</h1>

	{#if token && data}
		<div class="account-container">
			<div class="account-info">
				<h2>Infos &mdash; { data.name }</h2>

				<div class="inputs">
					<div class="mail">
						<label for="mail">mail: </label>
						<input type="email" bind:value={data.mail} on:change={ saveData } name="mail" id="mail" placeholder="Ex: mail@enseirb-matmeca.fr">
					</div>

					<div class="tel">
						<label for="tel">tel: </label>
						<input type="tel" bind:value={data.tel} on:change={ saveData } maxlength="10" name="tel" id="tel" placeholder="Ex: 0123456789">
					</div>

					<div class="place">
						<label for="place">Adresse: </label>
						<input type="text" bind:value={data.address} on:change={ saveData } name="place" id="place" placeholder="Ex: 1 rue de l'enseirb, Pessac">
					</div>

					<div class="city">
						<label for="city">Ville: </label>
						<input type="text" bind:value={data.city} on:change={ saveData } name="city" id="city" placeholder="Ex: Talence">
					</div>
				</div>
			</div>

			<div class="account-rank">
				<h2>Rank &mdash; { data.name }</h2>

				<div class="ranks">
					<div class="points">
						<p>Points:</p>
						<p>{ data.points }</p>
					</div>

					<hr>

					<div class="rank">
						<p>Rank</p>
						<p>#{ data.rank }</p>
					</div>
				</div>
			</div>
		</div>

		
		<LoginButton action="logout" onLogout="{ forceRefresh }" />

	{:else}
		<div class="login-container">
			<LoginButton />
		</div>
	{/if}

</section>


<style lang="scss">
@import '$lib/theme.scss';

.account {
	background-color: $background;
}

/*
 * Mobile query
*/
@media screen and (max-width: 899px) {
h1 {
	font-size: 5rem;
	text-shadow: $foreground 0 0 .2rem;
	text-align: center;

	margin-bottom: 5rem;
}

.account {
	padding: 5rem 0;
	align-items: center;
	justify-content: center;
}


.account-container {
	width: 100vw;
	min-height: 100svh;

	display: flex;
	flex-direction: column;

	align-items: center;

	gap: 1rem;
	position: relative;
}

.account-rank, .account-info {
	width: 75%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: .2rem;
	gap: 5rem;

	padding: 5rem 2rem;
	background-color: $alt-background;

	h2 {
		font-size: 3rem;
		text-wrap: wrap;
	}
}

.account-info {
	.inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;

		input, label {
			border: 0;
			border-radius: .2rem;
			font-family: 'fanwood-master', serif;
		}

		input {
			font-size: 1.5rem;
			max-width: 70%;
		}

		label {
			font-size: 1.5rem;
		}

		.mail, .tel, .place, .city {
			display: flex;

			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
}


.account-rank {
	.ranks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}

	hr {
		width: 70%;
		border-bottom: solid .1rem $foreground;
	}

	.points, .rank {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p {
		font-size: 3rem;
	}
}

}


/*
 * Desktop query
*/
@media screen and (min-width: 900px) {
.account {
	align-items: center;
	justify-content: center;
}

h1 {
	position: absolute;
	padding-top: 2rem;
	left: 5%;
	pointer-events: none;

	z-index: 500;
	font-size: 5rem;
	text-shadow: $foreground 0 0 .2rem;
	text-align: left;
}

.login-container {
	width: 100%;
	min-height: 100svh;

	display: flex;
	align-items: center;
	justify-content: center;

}

.account-container {
	width: 100%;
	min-height: 100svh;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
	position: relative;
}

.account-rank, .account-info {
	min-height: 50vh;
	min-width: 25vw;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 3rem;
	background-color: $alt-background;

	h2 {
		font-size: 3rem;
		text-wrap: wrap;
	}
}

.account-info {
	.inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;

		input, label {
			padding: 1rem 2rem;
			border: 0;
			border-radius: .2rem;
			font-family: 'fanwood-master', serif;
		}

		input {
			font-size: 2rem;
		}

		label {
			font-size: 3rem;
		}

		.mail, .tel, .place, .city {
			display: flex;
			gap: 3rem;

			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
}

.account-rank {
	.ranks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}

	hr {
		width: 70%;
		border-bottom: solid .1rem $foreground;
	}

	.points, .rank {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p {
		font-size: 3rem;
		padding: 1rem 2rem;
	}
}


}

</style>

