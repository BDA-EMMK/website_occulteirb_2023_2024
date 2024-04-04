<script lang="ts">
import type { Member } from './member';

import Team from "./team.svelte";

/*
 * It's teams declaration time !
*/

const deskMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Nathanaël",
    major: "Elec",
    aka: "Nath",
    role: "Sorcier",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Florian",
    major: "Elec",
    aka: "Dicaprierb",
    role: "Acteur Studio",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Guënael",
    major: "Info",
    aka: "Gégé",
    role: "Secrétaire",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
];

const trezMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Guillaume",
    major: "Elec",
    aka: "Guil",
    role: "C'est la Maaf",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Guillaume",
    major: "Mmk",
    aka: "Laume",
    role: "Luigi",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Juluan",
    major: "Mmk",
    aka: "Juju",
    role: "Joker",
  },
];

const eventMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Louis",
    major: "Elec",
    aka: "Louis le petit",
    role: "Ambianceur",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Chloé",
    major: "Jsp",
    aka: "La boom",
    role: "Ambianceuse",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Zhaniya",
    major: "Info",
    aka: "Demandeuse d'asile",
    role: "Ambianceuse",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Marine",
    major: "Elec",
    aka: "Joker",
    role: "Ambianceuse",
  },
];

const logMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "William",
    major: "Mmk",
    aka: "Wii U",
    role: "Ninja",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Pierre",
    major: "Mmk",
    aka: "Débranché",
    role: "Musicien",
  },
]

const comMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Shakty",
    major: "Telecom",
    aka: "Shake tea",
    role: "Poète",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Théo",
    major: "Info",
    aka: "Théo miel",
    role: "Bouquineirbed",
  },
]

const partMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Martin",
    major: "Mmk",
    aka: "Martine",
    role: "Parieur",
  },
]

const videoMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Shakty",
    major: "Telecom",
    aka: "Shake Tea",
    role: "Poète",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Faustine",
    major: "Info",
    aka: "Frosties",
    role: "Photo",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Thomas",
    major: "Info",
    aka: "Thomate",
    role: "Partout",
  },
]

const barMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Juluan",
    major: "Elec",
    aka: "Juju",
    role: "Joker",
  },
]

const webMembers: Member[] = [
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Nemo",
    major: "Info",
    aka: "Nems",
    role: "fait ud web",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
		name: "Damien",
    major: "Info",
    aka: "Dams",
    role: "Cineirb",
  },
  {
    img1URL: "/img/team/the_rock.jpg",
		img2URL:"/img/team/the_rock.jpg",
		img3URL: "/img/team/the_rock.jpg",
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

@keyframes floating {
	0% {
		translate: 0 0rem;
	}
	25% {
		translate: .5rem .5rem;
	}
	50% {
		translate: 0 1rem;
	}
	75% {
		translate: -.5rem 1.5rem;
	}
	100% {
		translate: 0 2rem;
	}
}

@keyframes floating-bee {
	0% {
		translate: 0vw 0rem;
	}
	25% {
		translate: calc(25vw + 25%) 1rem;
	}
	50% {
		translate: calc(50vw + 50%) 0;
	}
	75% {
		translate: calc(75vw + 75%) -1rem;
	}
	100% {
		translate: calc(100vw + 100%) 0rem;
	}
}

@keyframes floating-skeleton {
	0% {
		translate: 0vw 0rem;
	}
	25% {
		translate: calc(30vw + 25%) 1rem;
	}
	50% {
		translate: calc(57vw + 50%) 0;
	}
	75% {
		translate: calc(85vw + 75%) -1rem;
	}
	100% {
		translate: calc(110vw + 100%) 0rem;
	}
}

hr {
	width: 0%;
	aspect-ratio: 1014 / 178;
	border: 0;
	margin: 0;
	background-image: url('/img/separation_entre_polev2.svg');
	background-size: cover;
}

section {
	background-color: $alt-background;
	overflow: hidden;
}

.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	background-color: $background;

	min-height: 100svh;
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

/* Begin Mobile media query */

@media screen and (max-width: 899px) {

.hero {
	justify-content: space-evenly;

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

}

h1 {
	font-size: 5rem;
	text-shadow: $foreground 0 0 .2rem;
	text-align: center;
}

}


@media screen and (min-width: 900px) {
.hero {
	h1 {
		position: relative;
		width: 90%;
		padding-top: 2rem;
		pointer-events: none;
		overflow-x: hidden;

		z-index: 500;
		font-size: 5rem;
		text-shadow: $foreground 0 0 .2rem;
		text-align: left;
	}

	.imgs {
		position: relative;
		width: 100vw;
		aspect-ratio: 3 / 4;
		max-height: 60vh;
		overflow-x: hidden;

		.imgs-bee, .imgs-skeletton {
			left: -20%;
			position: absolute;
			height: calc(100% - 2rem);

			will-change: translate;
		}

		.imgs-bee {
			animation: 5s infinite linear floating-bee;
		}

		.imgs-skeletton {
			transform: rotateY(180deg);  /* Original image has wrong orientation */
			animation: 5s infinite 1s linear floating-skeleton;
		}
	}
}

}


</style>

