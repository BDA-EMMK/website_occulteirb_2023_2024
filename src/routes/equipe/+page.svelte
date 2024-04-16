<script lang="ts">
import type { Member } from './member';

import Team from "./team.svelte";

/*
 * It's teams declaration time !
*/

/*
  * role: role in the sect
  * img1URL: img for name
  * img2URL: img for role
  * img3URL: img for aka
  */
const deskMembers: Member[] = [
  {
    img1URL: "/img/team/narebiere/narebiere1.webp",
    img2URL: "/img/team/narebiere/narebiere2.webp",
    img3URL: "/img/team/narebiere/narebiere3.webp",
    name: "Nathanaël - Président",
    major: "Elec",
    aka: "AAAAAAA",
    role: "Le Grand Respo",
  },
  {
    img1URL: "/img/team/tmonseran/tmonseran1.webp",
    img2URL: "/img/team/tmonseran/tmonseran2.webp",
    img3URL: "/img/team/tmonseran/tmonseran3.webp",
    name: "Théo - Vice Prez",
    major: "Info",
    aka: "Sandouich ?",
    role: "L'Initiateur",
  },
  {
    img1URL: "/img/team/mpetitdemang/mpetitdemang1.webp",
    img2URL: "/img/team/mpetitdemang/mpetitdemang2.webp",
    img3URL: "/img/team/mpetitdemang/mpetitdemang3.webp",
    name: "Morgane - Vice Prez",
    major: "SEE",
    aka: "Bassiste n°91",
    role: "Gardienne du Culte",
  },
  {
    img1URL: "/img/team/fbabin/fbabin1.webp",
    img2URL: "/img/team/fbabin/fbabin2.webp",
    img3URL: "/img/team/fbabin/fbabin3.webp",
    name: "Florian - Coordo",
    major: "Elec",
    aka: "Babinks",
    role: "Inquisiteur",
  },
  {
    img1URL: "/img/team/lcouteret/lcouteret1.webp",
    img2URL: "/img/team/lcouteret/lcouteret2.webp",
    img3URL: "/img/team/lcouteret/lcouteret3.webp",
    name: "Louise - Coordo",
    major: "Elec",
    aka: "Louise attaque - Coordo",
    role: "Inquisitrice",
  },
  {
    img1URL: "/img/team/groger/groger1.webp",
    img2URL: "/img/team/groger/groger2.webp",
    img3URL: "/img/team/groger/groger3.webp",
    name: "Guénaël - Secrétaire",
    major: "Info",
    aka: "BigG",
    role: "Gardien des Secrets",
  },
];

const trezMembers: Member[] = [
  {
    img1URL: "/img/team/gconte/gconte1.webp",
    img2URL: "/img/team/gconte/gconte2.webp",
    img3URL: "/img/team/gconte/gconte3.webp",
    name: "Guillaume.C - Respo",
    major: "MMK",
    aka: "Forever Tonight",
    role: "Gardien du Trésor",
  },
  {
    img1URL: "/img/team/gmaraninchi/gmaraninchi1.webp",
    img2URL: "/img/team/gmaraninchi/gmaraninchi2.webp",
    img3URL: "/img/team/gmaraninchi/gmaraninchi3.webp",
    name: "Guillaume.M",
    major: "Elec",
    aka: "Cristina Cordul'eirb",
    role: "Intendant",
  },
];

const eventMembers: Member[] = [
  {
    img1URL: "/img/team/lderamat/lderamat1.webp",
    img2URL: "/img/team/lderamat/lderamat2.webp",
    img3URL: "/img/team/lderamat/lderamat3.webp",
    name: "Louis - Respo",
    major: "Elec",
    aka: "Nikola Tesla",
    role: "Éclaireur",
  },
  {
    img1URL: "/img/team/mdudot/mdudot1.webp",
    img2URL: "/img/team/mdudot/mdudot2.webp",
    img3URL: "/img/team/mdudot/mdudot3.webp",
    name: "Marine - Respo",
    major: "MMK",
    aka: "Koala",
    role: "Éclaireuse",
  },
  {
    img1URL: "/img/team/dyan/dyan1.webp",
    img2URL: "/img/team/dyan/dyan2.webp",
    img3URL: "/img/team/dyan/dyan3.webp",
    name: "David",
    major: "Telecom",
    aka: "Le Cycliste",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/ddelpy/ddelpy1.webp",
    img2URL: "/img/team/ddelpy/ddelpy2.webp",
    img3URL: "/img/team/ddelpy/ddelpy3.webp",
    name: "Damien",
    major: "Info",
    aka: "The Rock",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/znurkhanova/znurkhanova1.webp",
    img2URL: "/img/team/znurkhanova/znurkhanova2.webp",
    img3URL: "/img/team/znurkhanova/znurkhanova3.webp",
    name: "Zhaniya",
    major: "Info",
    aka: "Tealover",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/echampagne/echampagne1.webp",
    img2URL: "/img/team/echampagne/echampagne2.webp",
    img3URL: "/img/team/echampagne/echampagne3.webp",
    name: "Enzo",
    major: "MMK",
    aka: "Main Charact'eirb",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/flacroix/flacroix1.webp",
    img2URL: "/img/team/flacroix/flacroix2.webp",
    img3URL: "/img/team/flacroix/flacroix3.webp",
    name: "Faustine",
    major: "Info",
    aka: "Miel Pops",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/craynaud/craynaud1.webp",
    img2URL: "/img/team/craynaud/craynaud2.webp",
    img3URL: "/img/team/craynaud/craynaud3.webp",
    name: "Camille",
    major: "Info",
    aka: "Lacrymo",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/tmenier/tmenier1.webp",
    img2URL: "/img/team/tmenier/tmenier2.webp",
    img3URL: "/img/team/tmenier/tmenier3.webp",
    name: "Thomas Wanchai",
    major: "Info",
    aka: "Sunshine Lover",
    role: "Illuminé",
  },
  {
    img1URL: "/img/team/neeko/neeko1.webp",
    img2URL: "/img/team/neeko/neeko2.webp",
    img3URL: "/img/team/neeko/neeko3.webp",
    name: "Axel",
    major: "Info",
    aka: "Reine des Nekominis",
    role: "Illuminé",
  },

];

const logMembers: Member[] = [
  {
    img1URL: "/img/team/wye/wye1.webp",
    img2URL: "/img/team/wye/wye2.webp",
    img3URL: "/img/team/wye/wye3.webp",
    name: "William - Respo",
    major: "MMK",
    aka: "Wiwi Le Taxi",
    role: "Conducteur de Charette",
  },
  {
    img1URL: "/img/team/psboucher/psboucher1.webp",
    img2URL: "/img/team/psboucher/psboucher2.webp",
    img3URL: "/img/team/psboucher/psboucher3.webp",
    name: "Pierre",
    major: "MMK",
    aka: "Juice World",
    role: "Compagnon",
  },
  {
    img1URL: "/img/team/lmontescot/lmontescot1.webp",
    img2URL: "/img/team/lmontescot/lmontescot2.webp",
    img3URL: "/img/team/lmontescot/lmontescot3.webp",
    name: "Louis",
    major: "MMK",
    aka: "Harry Cover",
    role: "Compagnon",
  },
  {
    img1URL: "/img/team/ndacremont/ndacremont1.webp",
    img2URL: "/img/team/ndacremont/ndacremont2.webp",
    img3URL: "/img/team/ndacremont/ndacremont3.webp",
    name: "Nemo",
    major: "Info",
    aka: "Big Fish",
    role: "Poukaveur",
  },
]

const comMembers: Member[] = [
  {
    img1URL: "/img/team/skerrach/skerrach1.webp",
    img2URL: "/img/team/skerrach/skerrach2.webp",
    img3URL: "/img/team/skerrach/skerrach3.webp",
    name: "Shakty - Respo",
    major: "Telecom",
    aka: "TARZAN",
    role: "L'Émissaire",
  },
  {
    img1URL: "/img/team/thorrut/thorrut1.webp",
    img2URL: "/img/team/thorrut/thorrut2.webp",
    img3URL: "/img/team/thorrut/thorrut3.webp",
    name: "Thomas - Respo",
    major: "Info",
    aka: "Le Gorafi",
    role: "Le Chuchoteur",
  },
  {
    img1URL: "/img/team/rdebache/rdebache1.webp",
    img2URL: "/img/team/rdebache/rdebache2.webp",
    img3URL: "/img/team/rdebache/rdebache3.webp",
    name: "Raphaël",
    major: "Telecom",
    aka: "Osef",
    role: "Colporteur",
  },
  {
    img1URL: "/img/team/amonge/amonge1.webp",
    img2URL: "/img/team/amonge/amonge2.webp",
    img3URL: "/img/team/amonge/amonge3.webp",
    name: "Alexandre",
    major: "Elec",
    aka: "Le Mafieux",
    role: "BOEUF",
  },
]

const partMembers: Member[] = [
  {
    img1URL: "/img/team/movaere/movaere1.webp",
    img2URL: "/img/team/movaere/movaere2.webp",
    img3URL: "/img/team/movaere/movaere3.webp",
    name: "Martin - Respo",
    major: "Elec",
    aka: "L'ami de Franklin",
    role: "L'Ambassadeur",
  },
]

const videoMembers: Member[] = [
  {
    img1URL: "/img/team/skerrach/skerrach1.webp",
    img2URL: "/img/team/skerrach/skerrach2.webp",
    img3URL: "/img/team/skerrach/skerrach3.webp",
    name: "Shakty",
    major: "Telecom",
    aka: "TARZAN",
    role: "L'Émissaire",
  },
  {
    img1URL: "/img/team/thorrut/thorrut1.webp",
    img2URL: "/img/team/thorrut/thorrut2.webp",
    img3URL: "/img/team/thorrut/thorrut3.webp",
    name: "Thomas",
    major: "Info",
    aka: "Le Gorafi",
    role: "Le Chuchoteur",
  },
  {
    img1URL: "/img/team/mdudot/mdudot1.webp",
    img2URL: "/img/team/mdudot/mdudot2.webp",
    img3URL: "/img/team/mdudot/mdudot3.webp",
    name: "Marine",
    major: "MMK",
    aka: "Koala",
    role: "Éclaireuse",
  },
]

const barMembers: Member[] = [
  {
    img1URL: "/img/team/jvoisin/jvoisin1.webp",
    img2URL: "/img/team/jvoisin/jvoisin2.webp",
    img3URL: "/img/team/jvoisin/jvoisin3.webp",
    name: "Juluan - Respo",
    major: "Elec",
    aka: "Jujuent",
    role: "L'Apothicaire",
  },
]

const webMembers: Member[] = [
  {
    img1URL: "/img/team/ndacremont/ndacremont1.webp",
    img2URL: "/img/team/ndacremont/ndacremont2.webp",
    img3URL: "/img/team/ndacremont/ndacremont3.webp",
    name: "Nemo - Respo",
    major: "Info",
    aka: "Big Fish",
    role: "Poukaveur",
  },
  {
    img1URL: "/img/team/thorrut/thorrut1.webp",
    img2URL: "/img/team/thorrut/thorrut2.webp",
    img3URL: "/img/team/thorrut/thorrut3.webp",
    name: "Thomas",
    major: "Info",
    aka: "Le Gorafi",
    role: "Le Chuchoteur",
  },
  {
    img1URL: "/img/team/tmenier/tmenier1.webp",
    img2URL: "/img/team/tmenier/tmenier2.webp",
    img3URL: "/img/team/tmenier/tmenier3.webp",
    name: "Thomas Wanchai",
    major: "Info",
    aka: "Sunshine Lover",
    role: "The Rice Guy",
  },
  {
    img1URL: "/img/team/ddelpy/ddelpy1.webp",
    img2URL: "/img/team/ddelpy/ddelpy2.webp",
    img3URL: "/img/team/ddelpy/ddelpy3.webp",
    name: "Damien",
    major: "Info",
    aka: "The Rock",
    role: "Le Vrai Cadavre",
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
		width: 100%;
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

