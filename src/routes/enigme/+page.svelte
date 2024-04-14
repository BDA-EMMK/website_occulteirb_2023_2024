<script lang="ts">

const START_DAY = 15;

const contents = [
	{
		text: "La première note retrouvée est sous la forme d'une charade. Trouvez la solution et vous trouverez le premier indice. ",
		img: "/img/enigme/indice_1.png",
		titre: "Indice 1",
		style: "p2",
	},
	{
		text: "Le deuxième indice est la solution de cette énigme.",
		img: "/img/enigme/indice_2.png",
		titre: "Indice 2",
		style: "p1",
	},
	{
		text: 'Beebee a laissée un message à la vue de tous. Il dit "laissez place  à occult’eirb"',
		img: "",
		titre: "Indice 3",
		style: "p2",
	},
];

const now = new Date();
const shouldShow = contents.map((_, i) => now.getFullYear() >= 2025 || now.getMonth() >= 4 || now.getDate() >= START_DAY + i);
</script>

<!-- Content -->

<section id="brasse">
<div class="texts vertical p1 head">
	<h1>L'énigme Occult'eirb</h1>

	<p>
		La secte a perdu le traducteur de Beebee. Elle a donc besoin de  vous pour décoder son message. Heureusement, le traducteur à laissez ces notes derrière lui.  Pour la solution, contacter @Little_mamaturtle sur Telegram. Vous avez jusqu'à vendredi !!
	</p>

	<p>
		Un indice sera révélé par jour, soyez les premiers à trouver la solution !
	</p>

	<a href="/img/enigme/message_a_decoder.png" target="_blank">
		<img src="/img/enigme/message_a_decoder.png" alt="img_message_a_decoder" class="encoded_message">
	</a>
</div>

<div class="brasse-items">
	{#each contents as content, i}
		{#if shouldShow[i]}
		<div class="texts {content.style}" >
			<div class="left">
				<h2>{ content.titre }</h2>

				<a href="{ content.img }" target="_blank">
					<img src="{ content.img }" alt="img_{ content.titre }">
				</a>
			</div>

			<div class="right">
				{ content.text }
			
			</div>

		</div>
		{/if}
	{/each}
</div>

</section>

<style lang="scss">
@import '$lib/theme.scss';

.encoded_message {
	max-width: 70vw;
}

/*
		Sections
*/
section { background-color: $background; }

.left {
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		font-size: 3rem;
	}
}

.right {
	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 2rem;
	max-width: 40ch;
	font-family: fanwood-master, serif;
}

.p1 {
	background-color: $alt-background;
	color: $foreground;
}

.texts.vertical {
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	line-height: 1.5;

	padding: 10rem 2rem;

	text-align: center;

	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 2rem;
		font-family: fanwood-master, serif;
	}
}

#brasse {
	padding-top: 10rem;
}

/*
	Responsive
*/
@media screen and (max-width: 899px) {
.encoded_message {
	max-width: 90vw;
}

.texts.vertical.head {
	padding: 10rem 2rem;

	gap: 6rem;
}

.right {
	text-align: center;
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

.brasse-items {
	div {
		padding: 2rem 10vw;
	}
}

.left h2 {
	text-align: center;
}

}


/* Begin desktop style */
@media screen and (min-width: 900px) {
div.texts {
  display: flex;
  
  justify-content: space-between;

	gap: 3rem;
  padding: 5em 10vw;
}

.left h2 {
	padding-left: 2rem;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

}

.left {
	img {
		max-width: min(100ch, 90%);
	}
}
</style>
