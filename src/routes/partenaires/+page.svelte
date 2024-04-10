
<script lang="ts">

import type { Partner } from './partner';

import PartnerCard from "./partnerCard.svelte";

const partners: Partner[] = [
  {
    name: "Le Dé Caféiné",
    imgURL: "/img/part/LOGO-De_cafeine.png",
    desc: "Café ludique & bar à jeux de société",
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
    desc: "Le théâtre de trianon",
	link: "https://www.bordeauxtheatres.com/"
  },
  {
    name: "Virtual Room",
    imgURL: "/img/part/LOGO-Virtual_Room.png",
    desc: "Une aventure en réalité virtuelle",
	link: "https://bordeaux.virtual-room.com/"
  },
  {
	name: "Laser Quest", 
    imgURL: "/img/part/LOGO-Laser_Quest.jpg",
    desc: "Chaîne de jeux de laser en intérieur",
	link: "https://bordeaux.laserquest.fr/"
  },
  {
	name: "Megarama Bordeaux", 
    imgURL: "/img/part/LOGO-Megarama.png",
    desc: "Cinéma sur la rive droite de Bordeaux",
	link: "https://bordeaux.megarama.fr/"
  }
]
</script>

<!-- The part -->

<section class="partners-section">
	<h1>
		Nos partenaires
	</h1>

  <div class="partners">

    {#each partners as partner}
      <PartnerCard partner={partner} />
    {/each}

 </div>
</section>


<style lang="scss">
@import '$lib/theme.scss';

/* For the team */
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10rem 5vw;
	gap: 5rem;
}

.partners-section {
	background-color: $background;
	min-height: 100svh;
}


/* Begin Mobile media query */

@media screen and (max-width: 899px) {
h1 {
	font-size: 5rem;
	text-shadow: $foreground 0 0 .2rem;
	text-align: center;
}

.partners-section {
	padding-top: 4rem;
}

}

@media screen and (min-width: 900px) {
h1 {
	position: relative;
	left: 5%;
	max-width: 95%;
	padding-top: 2rem;
	pointer-events: none;

	z-index: 500;
	font-size: 4rem;
	text-shadow: $foreground 0 0 .2rem;
}
}

</style>

