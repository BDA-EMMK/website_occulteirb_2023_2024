
<script lang="ts">

import type { Partner } from './partner';

import PartnerCard from "./partnerCard.svelte";

const partners: Partner[] = [
  {
    name: "Le Dé Caféiné",
    imgURL: "/img/part/LOGO-De_cafeine.png",
    desc: "Café ludique&dashmbar à jeux de société",
		link: "http://ledecafeine.com/"
  },
  {
    name: "Gagnant Gagnant",
    imgURL: "/img/part/LOGO-Gagnant_Gagnant.png",
    desc: "Boutique de / bar à Jeux de société",
		link: "https://gg33.fr/"
  },
  {
    name: "Théâtre",
    imgURL: "/img/part/LOGO-Theatres.png",
    desc: "Le théâtre de trianon!",
		link: "https://www.bordeauxtheatres.com/"
  },
  {
    name: "Virtual Room",
    imgURL: "/img/part/LOGO-Virtual_Room.png",
    desc: "Une aventure en réalité virtuelle !",
		link: "https://bordeaux.virtual-room.com/"
  },
]

</script>

<!-- The part -->
<h1>
  Les partenaires !
</h1>

<section class="pole-section">
  <div class="partners">

    {#each partners as partner}
      <PartnerCard partner={partner} />
    {/each}

 </div>
</section>


<style lang="scss">
/* For the team */
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

