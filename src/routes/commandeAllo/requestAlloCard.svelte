
<script lang="ts">
import type { AlloRequest, AlloTask } from '$lib/allo';
import Allo from '$lib/allo';

export let allo: AlloTask = {
	taskId: -1,
	taskName: 'undefined',
	price: -1,
	picture: {},
	description: 'undefined',
	state: "enabled"
};


let quantity: string | number = "";

function addAllo() {
	if (typeof quantity !== 'number')
		return;

	const alloRequest: AlloRequest = {
		taskId: allo.taskId,
		quantity
	};

	Allo.saveAlloRequest(alloRequest);
}

</script>

<div class="allo-card">
	<div class="top">
		<h3 class="title">
			{ allo.taskName }
		</h3>
	</div>

	<p class="desc">
		{ allo.description }
	</p>

	<div class="submit">
		<div class="quantity">
			<label for="quantity">Quantité : </label>
			<input type="number" step="1" min='0' max="20" placeholder="Ex: 5" bind:value={quantity}>
		</div>

		<p class="price">Prix : { allo.price }€ / u (total: { allo.price * (typeof quantity === "number" ? quantity: 0) }€)</p>

		<div class="submit-button-container">
			<button on:click="{ () => addAllo() }" >Ajouter à la commande</button>
		</div>
	</div>

</div>


<style lang="scss">
@import '$lib/theme.scss';

.allo-card {
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: $background;

  max-width: min(90vw, 25rem);

	border-radius: .2rem;
  padding: 5rem 3rem;
  gap: 1rem;

  .title, p { margin: 0; }

	p, button, label, input {
		font-size: 1.5rem;
		font-family: fanwood-master, serif;
	}

	.quantity {
		display: flex;
		align-items: center;
		padding: 1rem .5rem;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.price {
		padding: 1rem .5rem;
	}

	button {
		background-color: none;
		border: none;
		padding: .5rem 1rem;
		border-radius: .2rem;
		cursor: pointer;
	}

	.submit-button-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

  .title {
    font-size: 3rem;
    padding-bottom: 1rem;
  }
}


@media screen and (max-width: 899px) {
.allo-card {
  padding: 10vw;
}

}
</style>
