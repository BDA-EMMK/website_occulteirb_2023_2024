<script lang="ts">

const START_DAY = 12;

const contents = [
	{
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic delectus accusamus vero quos ea non. Velit, ex ipsam beatae enim nulla libero incidunt autem veritatis, dicta voluptate dolorum fuga reprehenderit.",
		img: "/img/team/the_rock.jpg",
		titre: "Indice 1",
		style: "p2",
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic delectus accusamus vero quos ea non. Velit, ex ipsam beatae enim nulla libero incidunt autem veritatis, dicta voluptate dolorum fuga reprehenderit.",
		img: "/img/team/the_rock.jpg",
		titre: "Indice 2",
		style: "p1",
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic delectus accusamus vero quos ea non. Velit, ex ipsam beatae enim nulla libero incidunt autem veritatis, dicta voluptate dolorum fuga reprehenderit.",
		img: "/img/team/the_rock.jpg",
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
		Un indice sera révélé par jour, soyez les premiers à trouver la solution !
	</p>
</div>

<div class="brasse-items">
	{#each contents as content, i}
		{#if shouldShow[i]}
		<div class="texts {content.style}" >
			<div class="left">
				<h2>{ content.titre }</h2>

				<img src="{ content.img }" alt="img_{ content.titre }">
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
		padding-left: 2rem;
	}
}

.right {
	font-size: 2rem;
	max-width: 60ch;
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

.texts.vertical.head {
	padding: 10rem 2rem;

	gap: 6rem;
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

}


/* Begin desktop style */
@media screen and (min-width: 900px) {
div.texts {
  display: flex;
  
  justify-content: space-between;

	gap: 3rem;
  padding: 5em 10vw;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

.left {
	img {
		max-width: 60ch;
	}
}

}
</style>
