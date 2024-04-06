
<script lang="ts">
import HeaderNavLink from "./headerNavLink.svelte";

import { onMount } from "svelte";
import { page } from '$app/stores';

import type { HeaderNavData } from "./headerNav";
import { isHeaderNavActive } from './headerNav';

/*
    All
*/
const headerNavDatas: HeaderNavData[] = [
  {
    URL: '/',
    text: 'Accueil'
  },
  {
    URL: '/equipe/',
    text: 'Équipe'
  },
  {
    URL: '/allo/',
    text: 'Allos'
  },
  {
    URL: '/video/',
    text: 'Vidéo'
  },
  {
    URL: '/jeu/',
    text: 'Jeu'
  },
  {
    URL: '/partenaires/',
    text: 'Partenaires'
  },
  {
    URL: '/account/',
    text: 'Compte'
  },
];

let pathname = "";
let isLoaded: boolean = false;
let header: HTMLElement | null = null;

onMount(() => {
  isLoaded = true
	header = document.querySelector('.header');
});


$: if (isLoaded) { pathname = $page.url.pathname };

/*
  Mobile
*/
export let isNavOpened: boolean = false
export let onOpenNav: () => void = () => {};
export let onCloseNav: () => void = () => {};

function openNav() {
	onOpenNav();

	isNavOpened = true;

	if (header)
		header.scrollTo(0, 0);
}

function closeNav() {
	onCloseNav();

	isNavOpened = false;
}

function toggleNav() {
	if (isNavOpened)
		closeNav();

	else
		openNav();
}
</script>

<header class="header {isNavOpened ? 'opened': ''}"  >
  <nav>
	<div class="mobile">
		<button class="toggleHeader" aria-label="Show header" on:click={ toggleNav }>
			<div class="hamburger-top"></div>
			<div class="hamburger-mid"></div>
			<div class="hamburger-bot"></div>
		</button>
	</div>

    <!-- Left side logo -->
    <a href="/" class="logo-link" on:click={closeNav}>
			<div class="logo"></div>
    </a>

    <!-- Navbar to the right -->
    <ul class="navbar">
    {#each headerNavDatas as headerNavData}
      <li class="navbar-item">

        <HeaderNavLink headerNavData="{ headerNavData }"
					active={ isHeaderNavActive(headerNavData, pathname) }
					on:click="{closeNav}"
				/>

      </li>
    {/each}
    </ul>
  </nav>
</header>


<style lang="scss">
@import '$lib/theme.scss';

header {
	z-index: 100;
	pointer-events: none;
	overflow-x: hidden;
}

@keyframes header-show {
	from {
		transform: translate(70%, -100%);
	}
	to {
		transform: translate(-50%, 0%);
	}
}

@media screen and (max-width: 899px) {
.mobile {
  position: sticky;
  background: transparent;
	pointer-events: none;

  top: 0;

  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  min-height: 4rem;
  height: 5svh;

  .toggleHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		pointer-events: auto;

		position: relative;

    border: 0;
    margin: 0;
		padding: 1rem;
    outline: 0;


    background-color: rgba($darker-background, .61);

		&::before {
			content: '';

			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			position: absolute;

			background-color: $header-background;

			transition: opacity .5s ease-in-out .5s;
			will-change: opacity, tansition;
			opacity: 0;
		}

		/* backdrop-filter: blur(2px); */
		border-bottom-left-radius: 1rem;

		/* color: $header-foreground; */
		cursor: pointer;

		.hamburger-top, .hamburger-mid, .hamburger-bot {
			height: 10%;
			width: 3rem;

			border-radius: .5rem;

			background-color: $foreground;

			will-change: transform;

			filter: opacity(1);
			transition: background-color .5s ease-in-out .5s, transform .5s ease-in-out;
		}

		.hamburger-mid { 
			will-change: transform, filter;
			transition: transform .5s ease-in-out, filter .5s ease-in-out, background-color .5s ease-in-out .5s;
		}
  }
}

.header {
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;


  width: 100%;
  height: 100%;
  position: fixed;

  pointer-events: none;  /* Do not prevent from click nav ... */

  left: 0;
  top: 0;

  z-index: 1000;

	&.opened {
		pointer-events: auto;
		overflow-y: auto;
	}

  nav {
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

		transition: transform .5s ease-in-out 0s;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;

    font-size: 2rem;

		width: 100%;

    li {
			list-style: none;
		}
  }

  .logo-link {
    display: flex;
    justify-content: center;
		width: 75%;

		translate: 0vw 0vw;

    .logo {
			width: 100%;
			max-width: 18rem;
			aspect-ratio: 740 / 993;

			background-image: url('/img/Illustration_bee.svg');
			background-size: cover;
    }
  }

	.logo-link, li {
		will-change: translate, transition;
		translate: 100vw 0vw;
		/* opacity: 0; */
	}

	.logo-link {
		transition: translate .4s ease-in-out .7s;
	}

	ul :nth-child(1) {
		transition: translate .4s ease-in-out .6s;
	}

	ul :nth-child(2) {
		transition: translate .4s ease-in-out .5s;
	}

	ul :nth-child(3) {
		transition: translate .4s ease-in-out .4s;
	}

	ul :nth-child(4) {
		transition: translate .4s ease-in-out .3s;
	}

	ul :nth-child(5) {
		transition: translate .4s ease-in-out .2s;
	}

	ul :nth-child(6) {
		transition: translate .4s ease-in-out 0.1s;
	}

	ul :nth-child(7) {
		transition: translate .4s ease-in-out 0s;
	}

  &.opened {
		.toggleHeader::before { 
			transition: opacity .5s ease-in-out 0s;
			opacity: 1;
		}

		.hamburger-top, .hamburger-mid, .hamburger-bot {
			background-color: $header-foreground;
		}

		.hamburger-top {
			transform: translateY(450%) rotate(45deg);
		}

		.hamburger-mid {
			transform: translateX(-100%);
			filter: opacity(0);
		}

		.hamburger-bot {
			transform: translateY(-450%) rotate(-45deg);
		}

		.logo-link, li {
			translate: 0vw 0vw;
			/* filter: opacity(1); */
		}

		.logo-link {
			transition: translate .4s ease-in-out .4s;
		}

		ul :nth-child(1) {
			transition: translate .4s ease-in-out .5s;

		}

		ul :nth-child(2) {
			transition: translate .4s ease-in-out .6s;
		}

		ul :nth-child(3) {
			transition: translate .4s ease-in-out .7s;
		}

		ul :nth-child(4) {
			transition: translate .4s ease-in-out .8s;
		}

		ul :nth-child(5) {
			transition: translate .4s ease-in-out .9s;
		}

		ul :nth-child(6) {
			transition: translate .4s ease-in-out 1s;
		}

		ul :nth-child(7) {
			transition: translate .4s ease-in-out 1.1s;
		}
  }

	&::before {
		content: '';

		position: fixed;
		left: 0;
		top: 0;

		width: 100vw;
		height: 220vh;

		will-change: translate, transition;
		background-color: $header-background;
		transition: translate .6s ease-in-out .5s;
		z-index: -1;

		translate: 0% -100%;
		border-bottom-left-radius: 150vw;
	}

	&.opened::before {
		translate: 0% 0%;
		transition: translate .6s ease-in-out 0s;
	}
}

}


@media screen and (min-width: 900px) {
.mobile {
	display: none;
	pointer-events: none;
}


/* For the logo */
.logo {
  width: 80px;
}

/* Header */
header {
	position: fixed;

	background: rgba($header-foreground, .61);
	backdrop-filter: blur(5px);

	width: 100%;
	right: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 1rem 2rem;
	font-size: 3rem;
}


/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

	position: relative;
  gap: .5rem;
  margin: 0;
	padding: 0;

  /* remove items list icon */
  li.navbar-item {
    list-style: none;
  }
}
}

</style>
