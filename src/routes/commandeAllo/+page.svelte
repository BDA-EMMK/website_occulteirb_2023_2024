
<script lang="ts">
import type { Allo } from "./allo";
import AlloCard from "./alloCard.svelte";
import AlloHero from "../allo/alloHero.svelte";

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

<AlloHero />

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

.allos-list {
  padding: 5vw 10vw;
  gap: 5vw;

  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
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

