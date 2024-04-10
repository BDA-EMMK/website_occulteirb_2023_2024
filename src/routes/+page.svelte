
<script lang="ts">
</script>

<!-- Content -->

<section class="hero">
	<h1>Destin'eirb</h1>

	<div class="logo-container" >
		<div class="sun"></div>
		<div class="runes"></div>
		<div class="bee"></div>
	</div>

	<a  href="#brasse" aria-label="Lire la brasse">
		<div class="call-read">
			<p>Lire la brasse !</p>
		</div>
	</a>
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

/*
	Logo
*/

/* Logo animation */
@keyframes logo-rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		/* transform: rotate(360deg); */
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

/* Logo layout ! */
.logo-container {
	position: relative;
	aspect-ratio: 1 / 1;
	pointer-events: none;

	overflow: hidden;  /* Prevent overflow-x issue on rotation on index.html */
}


.bee {
	position: relative;

	width: 100%;
	aspect-ratio: 1 / 1;

	background-image: url('/img/logo/logo_abeille.svg');
	background-size: cover;
	translate: 3% 0;

	will-change: transform;
	animation: 1s ease-in-out 0s infinite alternate logo-translation;
}

.sun {
	position: absolute;
	left: 1%;
	top: 1%;

	width: 98%;
	aspect-ratio: 382 / 390;

	background-image: url('/img/logo/sun.svg');
	background-size: cover;

	animation: 60s linear 0s infinite logo-rotation;
}

.runes {
	position: absolute;
	left: 10%;
	top: 10%;

	width: 80%;
	aspect-ratio: 272 / 280;

	background-image: url('/img/logo/runes.svg');
	background-size: cover;

	animation: 60s linear 0s infinite reverse logo-rotation;
}

/*
		Sections
*/
section { background-color: $background; }

.p1 {
	background-color: $alt-background;
	color: $foreground;
}


/*
	Responsive
*/
@media screen and (max-width: 899px) {
.logo-container {
	height: 70svh;
	max-width: 95vw;
	max-height: 95vw;
}
  

section.hero {
	width: 100%;
	min-height: 100svh;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		font-size: 5rem;
		text-shadow: $foreground 0 0 .2rem;
	}

	a { 
		text-decoration: none;
		max-width: 100vw;  /* To prevent .call-read to overflow */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.call-read {
		font-size: 2rem;
		display: flex;
		justify-content: center;
		
		/* min-height: 11rem; */
		width: 24.2rem;
		max-width: 100vw;
		aspect-ratio: 2.2 / 1;
		background-image: url('/img/tour_du_lire_brasse.svg');
		background-size: 100%;

		filter: drop-shadow($foreground 0 0 .2rem);

		p {
			font-size: 2.5rem;
			height: 2.5rem;
			text-align: center;
			position: relative;
			top: 3rem;

			/* text-shadow: $foreground 0 0 .2rem; */
			text-shadow: $foreground 0 0 1px;
		}
	}


	
}

#brasse {
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
}

}


/* Begin desktop style */
@media screen and (min-width: 900px) {
section.hero {
	width: 100%;
	height: 100svh;

	display: grid;
	grid-template-areas: 
            ". . . . ."
            ". logo logo name ."
            ". logo logo name ."
            ". . . read ."
            ". . . . .";

	grid-template-rows: 5rem minmax(20vw, 30vh) auto auto 5rem;
	grid-template-columns: 5rem minmax(20vw, 30vh) auto auto 5rem;

	.logo-container {
		grid-area: logo;
		z-index: 500;
	}

	h1 {
		grid-area: name;

		display: inline-flex;
		justify-content: center;
		align-items: center;

		font-size: 6rem;
		text-shadow: $foreground 0 0 .2rem;
	}

	a {
		grid-area: read;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.call-read {
		font-size: 2rem;
		display: flex;
		justify-content: center;
		
		/* min-height: 11rem; */
		width: 24.2rem;
		max-width: 100vw;
		aspect-ratio: 2.2 / 1;
		background-image: url('/img/tour_du_lire_brasse.svg');
		background-size: 100%;

		filter: drop-shadow($foreground 0 0 .2rem);

		p {
			font-size: 2.5rem;
			height: 2.5rem;
			text-align: center;
			position: relative;
			top: 3rem;

			/* text-shadow: $foreground 0 0 .2rem; */
			text-shadow: $foreground 0 0 1px;
		}

		font-size: 2rem;
		display: flex;
		justify-content: center;

		aspect-ratio: 2.2 / 1;
		background-image: url('/img/tour_du_lire_brasse.svg');
		background-size: 100%;

		filter: drop-shadow($foreground 0 0 .2rem);
	}
}

div.texts {
  display: flex;
  
  justify-content: space-between;

  padding: 5em 10vw;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

}
</style>
