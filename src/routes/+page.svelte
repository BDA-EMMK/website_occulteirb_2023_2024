
<script lang="ts">
</script>

<!-- Content -->

<section class="hero">
	<div class="container" >
		<div class="back"></div>
		<div class="bee"></div>
	</div>

	<div class="action-scroll">
		<h1>Destin'eirb</h1>

		<a  href="#brasse" aria-label="Lire la brasse">
			<div class="call-read">
				<p>Lire la brasse !</p>
			</div>
		</a>
	</div>
</section>

<section id="brasse">

<div class="brasse-items">
  <div class="texts p1">
		<h2>Time for the brasse !</h2>

    <p class="text">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <p class="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic delectus accusamus vero quos ea non. Velit, ex ipsam beatae enim nulla libero incidunt autem veritatis, dicta voluptate dolorum fuga reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla, non ipsam minima odio tempora iure quidem. Nostrum pariatur perferendis illum! Distinctio sed delectus perferendis nulla minus culpa mollitia velit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor tempore cum beatae iste voluptatum modi velit quam natus eos quasi voluptate saepe consequuntur, iure necessitatibus! Qui nihil dolores iste.
    </p>
  </div>

  <div class="texts">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque porro tempore! Tenetur eligendi temporibus nulla iure similique dolorum velit, atque rem sed, officiis corporis reiciendis, aperiam rerum quas quis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati. Odio sint laudantium iusto. Ratione fuga cumque maxime, odit veritatis voluptates. Quae excepturi consequatur animi ipsam! Cumque suscipit reprehenderit autem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio saepe, culpa commodi consectetur odio voluptate vero, magni expedita recusandae sequi necessitatibus laborum itaque eligendi. Nisi provident laudantium quibusdam officia.
    </p>

    <div class="img"></div>
  </div>
</div>

</section>

<style lang="scss">
@import '$lib/theme.scss';

@keyframes logo-rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes logo-translation {
	from {
		transform: translateY(-1em);
	}
	to {
		transform: translateY(-1.5em);
	}
}

@media screen and (max-width: 899px) {
section { background-color: $background; }
  

section.hero {
	width: 100%;
	min-height: 100svh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 3rem;

	.container {
		position: relative;
		height: 70svh;
		aspect-ratio: 1 / 1;

    max-width: 80vw;
    max-height: 80vw;

    overflow: hidden;  /* Prevent overflow-x issue on rotation on index.html */
	}

	.bee {
		position: relative;

		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/img/logo/logo_abeille.svg');
		background-size: cover;

		will-change: transform;
		animation: 1s ease-in-out 0s infinite alternate logo-translation;
	}

	.back {
		position: absolute;
		left: 0;
		top: 0;

		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/img/logo/logo_fond.svg');
		background-size: cover;

		border-radius: 100%;
		background-color: $logo-red;

		animation: 60s linear 0s infinite logo-rotation;
	}


	.action-scroll {
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	h1 {
		font-size: 5rem;
		text-shadow: $foreground 0 0 .2rem;
	}

	a {
		text-decoration: none;
	}

	overflow-x: hidden;

	.call-read {

		font-size: 2rem;
		display: flex;
		justify-content: center;
		
		height: 11rem;
		aspect-ratio: 2.2 / 1;
		background-image: url('/img/tour_du_lire_brasse.svg');
		background-size: cover;

		filter: drop-shadow($foreground 0 0 .2rem);

		p {
			font-size: 2.5rem;
			text-align: center;
			position: relative;
			top: 3rem;

			/* text-shadow: $foreground 0 0 .2rem; */
			text-shadow: $foreground 0 0 .1rem;
		}
	}


	
}

#brasse {
  padding: 2em 0;

	h2 {
		font-size: 3rem;
		margin-bottom: 3rem;
	}
}

.texts {
  display: flex;
	flex-direction: column;

	gap: 3em;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

.brasse-items {
	div {
		padding: 2rem 10vw;
	}

	.p1 {
		background-color: $alt-background;
		color: $foreground;
	}
}

}



@media screen and (min-width: 900px) {
section.hero {
	width: 100%;
	height: 100svh;

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		position: relative;
		width: 70svh;
		height: 70svh;

    max-width: 90vw;
    max-height: 90vw;

    overflow: hidden;  /* Prevent overflow-x issue on rotation on index.html */
	}

	.bee {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/logo_destineirb_abeille.png');
		background-size: cover;

		will-change: transform;
		animation: 1s ease-in-out 0s infinite alternate logo-translation;
	}

	.back {
		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/logo_destineirb_fond.png');
		background-size: cover;

		position: absolute;
		left: 0;
		top: 0;

		border-radius: 100%;
		background-color: $logo-red;

		animation: 60s linear 0s infinite logo-rotation;
	}
}

div.texts {
  display: flex;
  
  justify-content: space-between;

  padding: 2em 10vw;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

}
</style>


