
<script lang="ts">
import type { Allo } from "./allo";
import AlloCard from "./alloCard.svelte";



const allos: Allo[] = [
  {
    UID: "0",
    CAS_UID: "jsp",
    state: "In Progress",
    title: "Des crèpes !",
    finishDate: "not set",
    creationDate: "5 min ago",
    requestText: "Des crèpes pitié monsieur...."
  },
  {
    UID: "1",
    CAS_UID: "jsp",
    state: "In Progress",
    title: "Des crèpes !",
    finishDate: "not set",
    creationDate: "5 min ago",
    requestText: "Des crèpes pitié monsieur...."
  },
  {
    UID: "2",
    CAS_UID: "jsp",
    state: "In Progress",
    title: "Des crèpes !",
    finishDate: "not set",
    creationDate: "5 min ago",
    requestText: "Des crèpes pitié monsieur...."
  }
]
</script>

<section class="allo-hero">
<h1>
  Commande d'Allos
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

<section id="commande-allo">
<ul class="allos-list">
  {#each allos as allo}
    <li>
      <AlloCard allo={allo} />
    </li>
  {/each}
</ul>
</section>


<style lang="scss">
@import '$lib/theme.scss';

#commande-allo {
	background-color: $alt-background;
}

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

.allos-list {
  padding: 5vw 10vw;
  gap: 5vw;

  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
  justify-content: space-around;
}


@media screen and (max-width: 899px) {
  .allos-list {
    padding: 5vw 0vw;
    gap: 5vw;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
}

</style>

