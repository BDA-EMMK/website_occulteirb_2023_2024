


<section class="allo-hero">
<h1>
  Les Allos !
</h1>

<div class="links">
	<a href="/commandeAllo/#commande-allo">
		<h2>Commander des allos</h2>
	</a>

	<a href="/allo/#allo">
		<h2>Historique des commandes</h2>
	</a>
</div>

</section>


<style lang="scss">
@import '$lib/theme.scss';

@media screen and (max-width: 899px) {
.allo-hero {
	height: 100svh;
	padding: 0rem 10vw;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.links, h1 {
		position: relative;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		bottom: 10svh;
	}

	h1 {
		font-size: 5rem;
		text-align: center;
		text-shadow: $foreground 0 0 .2rem;

		top: 10svh;
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

		bottom: 10svh;
	}

	h1 {
		z-index: 500; /* do not get blrured by header */
		pointer-events: none;
		width: 90%;
		padding-top: 2rem;

		font-size: 5rem;
		text-align: left;
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
</style>

