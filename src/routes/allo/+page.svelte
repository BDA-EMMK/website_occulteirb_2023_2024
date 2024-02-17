
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

<h1>
  Les Allos !
</h1>

<ul class="allos-list">
  {#each allos as allo}
    <li>
      <AlloCard allo={allo} />
    </li>
  {/each}
</ul>

<style lang="scss">

.allos-list {
  padding: 5vw 10vw;
  gap: 5vw;

  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  li { list-style: none; }
}

</style>

