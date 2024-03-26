
<script lang="ts">
import auth from '$lib/auth';
    import { onMount } from 'svelte';

interface Data {
	rank: number;
	points: number;
	name: string;
}

const rank = 1;
const points = 200000;
const name = "Nemo D'ACREMONT"

let data: Data | null = null;
let id: string | null = null;

const getData = async (): Promise<Data | null> => {
	const id = auth.getID();
	if (!id)
		return null;

	return await (await fetch(`http://localhost:3000/getData?id=${id}`)).json();
}

onMount(() => {
	const url = new URL(window.location.href);

	if (url.searchParams.has('token'))
		sessionStorage.setItem('id', url.searchParams.get("token") as string);
});

(async () => {
	id = auth.getID();
	data = await getData();
	console.log(data);
})()

const getName = () => {
	if (data)
		return data.name;

	return name;
}

const getRank = () => {
	if (data)
		return data.rank;

	return rank;
}

const getPoints = () => {
	if (data)
		return data.points;

	return points
}
</script>


<section class="account">
	<h1>Mon Compte</h1>

	{#if id}
		<div class="account-container">
			<div class="account-info">
				<h2>Infos &mdash; { getName() }</h2>

				<div class="inputs">
					<div class="mail">
						<label for="mail">mail: </label>
						<input type="email" name="mail" id="mail" value="ndacremont@enseirb-matmeca.fr" placeholder="mail@enseirb-matmeca.fr">
					</div>

					<div class="tel">
						<label for="tel">tel: </label>
						<input type="tel" maxlength="10" name="tel" id="tel" value="0723913845" placeholder="0123456789">
					</div>

					<div class="place">
						<label for="place">Adresse: </label>
						<input type="text" name="place" id="place" value="Ma rue" placeholder="1 rue de l'enseirb, Pessac">
					</div>
				</div>
			</div>

			<div class="account-rank">
				<h2>Rank &mdash; { getName() }</h2>

				<div class="ranks">
					<div class="points">
						<p>Points:</p>
						<p>{ getPoints() }</p>
					</div>

					<hr>

					<div class="rank">
						<p>Rank</p>
						<p>#{ getRank() }</p>
					</div>
				</div>
			</div>
		</div>

	{:else}
		<div class="login-container">
			<button class="login-button" on:click="{ auth.login }">login</button>
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

		.mail, .tel, .place {
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

		.mail, .tel, .place {
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

