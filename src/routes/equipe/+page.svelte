
<script lang="ts">
import type { Member } from './member';


import Team from "./team.svelte";

/*
 * It's teams declaration time !
*/

const deskMembers: Member[] = [
  {
    name: "Nathanaël",
    major: "Elec",
    aka: "Nath",
    role: "Sorcier",
  },
  {
    name: "Florian",
    major: "Elec",
    aka: "Dicaprierb",
    role: "Acteur Studio",
  },
  {
    name: "Guënael",
    major: "Info",
    aka: "Gégé",
    role: "Secrétaire",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
];

const trezMembers: Member[] = [
  {
    name: "Guillaume",
    major: "Elec",
    aka: "Guil",
    role: "C'est la Maaf",
  },
  {
    name: "Guillaume",
    major: "Mmk",
    aka: "Laume",
    role: "Luigi",
  },
  {
    name: "Juluan",
    major: "Mmk",
    aka: "Juju",
    role: "Joker",
  },
];

const eventMembers: Member[] = [
  {
    name: "Louis",
    major: "Elec",
    aka: "Louis le petit",
    role: "Ambianceur",
  },
  {
    name: "Chloé",
    major: "Jsp",
    aka: "La boom",
    role: "Ambianceuse",
  },
  {
    name: "Zhaniya",
    major: "Info",
    aka: "Demandeuse d'asile",
    role: "Ambianceuse",
  },
  {
    name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    name: "Marine",
    major: "Elec",
    aka: "Joker",
    role: "Ambianceuse",
  },
];

const logMembers: Member[] = [
  {
    name: "William",
    major: "Mmk",
    aka: "Wii U",
    role: "Ninja",
  },
  {
    name: "Pierre",
    major: "Mmk",
    aka: "Débranché",
    role: "Musicien",
  },
]

const comMembers: Member[] = [
  {
    name: "Shakty",
    major: "Telecom",
    aka: "Shake tea",
    role: "Poète",
  },
  {
    name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
]

const partMembers: Member[] = [
  {
    name: "Martin",
    major: "Mmk",
    aka: "Martine",
    role: "Parieur",
  },
]

const videoMembers: Member[] = [
  {
    name: "Shakty",
    major: "Telecom",
    aka: "Shake Tea",
    role: "Poète",
  },
  {
    name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
]

const barMembers: Member[] = [
  {
    name: "Juluan",
    major: "Elec",
    aka: "Juju",
    role: "Joker",
  },
]

const webMembers: Member[] = [
  {
    name: "Damien",
    major: "Info",
    aka: "Dams",
    role: "Cineirb",
  },
  {
    name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
]

</script>

<section class="hero">
		<h1>
			Notre Équipe !
		</h1>

		<div class="imgs">
			<img class="imgs-skeletton" src="/img/Illustration_squelette.svg" alt="">
			<img class="imgs-bee" src="/img/Illustration_bee.svg" alt="">
		</div>

		<a  href="#presentation" aria-label="Découvrir la liste">
			<div class="call-read">
				<p>Découvrir la liste</p>
			</div>
		</a>
</section>

<section id="presentation">
	<Team members="{deskMembers}" desc="Le Bureau" />

	<hr>

	<Team members="{trezMembers}" desc="La Trésorerie" />

	<hr>

	<Team members="{eventMembers}" desc="Pôle Event" />

	<hr>

	<Team members="{logMembers}" desc="Pôle Logistique" />

	<hr>

	<Team members="{comMembers}" desc="Pôle Communication" />

	<hr>

	<Team members="{partMembers}" desc="Pôle Part" />

	<hr>

	<Team members="{videoMembers}" desc="Pôle Vidéo" />

	<hr>

	<Team members="{barMembers}" desc="Pôle Bar" />

	<hr>

	<Team members="{webMembers}" desc="Pôle Web" />
</section>


<style lang="scss">
@import '$lib/theme.scss';

/* Begin Mobile media query */

@media screen and (max-width: 899px) {

@keyframes floating {
	from {
		translate: 0 0rem;
	}
	to {
		translate: 0 2rem;
	}
}

section {
	background-color: $alt-background;
}

.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: $background;

	min-height: 100svh;

	.imgs {
		position: relative;
		width: 100vw;
		aspect-ratio: 3 / 4;
		max-height: 80vw;
		overflow-x: hidden;

		.imgs-bee, .imgs-skeletton {
			position: absolute;
			height: calc(100% - 2rem);
		}

		.imgs-bee {
			right: -10%;
			animation: 1.5s infinite ease-in-out floating alternate-reverse;
		}

		.imgs-skeletton {
			transform: rotateY(180deg);  /* Original image has wrong orientation */
			left: -20%;
			animation: 4s infinite ease-in-out floating alternate-reverse;
		}
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

h1 {
	font-size: 5rem;
	text-shadow: $foreground 0 0 .2rem;
	text-align: center;
}

}

</style>

