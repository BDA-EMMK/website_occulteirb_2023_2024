
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
    URL: '/partenaires/',
    text: 'Partenaires'
  },
  {
    URL: '/video/',
    text: 'Vidéo'
  },
  {
    URL: '/jeu/',
    text: 'Jeu'
  },
];

let pathname = "";
let isLoaded: boolean = false;

onMount(() => {
  isLoaded = true
});


$: if (isLoaded) { pathname = $page.url.pathname };

/*
  Mobile
*/
export let isNavOpened: boolean = false

function toggleNav() { isNavOpened = !isNavOpened; }
</script>

<header class="header {isNavOpened ? 'opened': ''}"  >
	<div class="mobile">
		<button class="toggleHeader" aria-label="Show header" on:click={toggleNav}>
			<div class="hamburger-top"></div>
			<div class="hamburger-mid"></div>
			<div class="hamburger-bot"></div>
		</button>
	</div>

	<div class="bg">
		<div class="top-right"></div>
	</div>

  <nav>
    <!-- Left side logo -->
    <a href="/" class="logo-link" on:click={toggleNav}>
			<div class="logo"></div>
      <!-- <img class="logo" src="/img/logos/eye_logo.png" alt="Logo"> -->
    </a>

    <!-- Navbar to the right -->
    <ul class="navbar">
    {#each headerNavDatas as headerNavData}
      <li class="navbar-item">

        <HeaderNavLink headerNavData="{ headerNavData }"
					active={ isHeaderNavActive(headerNavData, pathname) }
					on:click="{toggleNav}"
				/>

      </li>
    {/each}
    </ul>
  </nav>
</header>


<style lang="scss">
@import '$lib/theme.scss';

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
	pointer-events: auto;

  top: 0;

  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  min-height: 4em;
  height: 5svh;

  z-index: 3;

  .toggleHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

    font-family: 'Protest Revolution', cursive;
    font-size: 2rem;

    border: 0;
    margin: 0;
		padding: 1rem;
    outline: 0;


    background-color: rgba($background, .61);

		&::before {
			content: '';

			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			position: absolute;

			background-color: $red;

			transition: opacity .7s ease-in-out .7s;
			will-change: opacity, tansition;
			opacity: 0;
		}

		backdrop-filter: blur(5px);
		border-bottom-left-radius: 1rem;

		color: $foreground;
		cursor: pointer;

		.hamburger-top, .hamburger-mid, .hamburger-bot {
			height: 10%;
			width: 3rem;

			border-radius: .5rem;

			background-color: $foreground;

			will-change: transform;

			filter: opacity(1);
			transition: transform .5s ease-in-out;
		}

		.hamburger-mid { 
			will-change: transform, filter;
			transition: transform .5s ease-in-out, filter .5s ease-in-out;
		}
  }
}

.header {
  width: 100%;
  height: 100%;
  position: fixed;

  overflow: hidden;
  pointer-events: none;  /* Do not prevent from click nav ... */
	&.opened {
		pointer-events: auto;
		overflow-y: auto;
	}

  left: 0;
  top: 0;

  z-index: 2;

  nav {
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 10svh;

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

    padding: 2em 1em;

		translate: 0vw 0vw;

    .logo {
			width: 100%;
			aspect-ratio: 15 / 10;


			background-image: url('/img/logos/eye_logo.png');
			background-size: cover;
    }
  }

	.logo-link, li {
		will-change: translate, transition;
		translate: 100vw 0vw;
		/* opacity: 0; */
	}

	.logo-link {
		transition: translate .5s ease-in-out 0s;
	}

	ul :nth-child(1) {
		transition: translate .5s ease-in-out .1s;
	}

	ul :nth-child(2) {
		transition: translate .5s ease-in-out .2s;
	}

	ul :nth-child(3) {
		transition: translate .5s ease-in-out .3s;
	}

	ul :nth-child(4) {
		transition: translate .5s ease-in-out .4s;
	}

	ul :nth-child(5) {
		transition: translate .5s ease-in-out .5s;
	}

	ul :nth-child(6) {
		transition: translate .5s ease-in-out .6s;
	}

  &.opened {
		.toggleHeader::before { 
			transition: opacity .5s ease-in-out 0s;
			opacity: 1;
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
			transition: translate .5s ease-in-out .7s;
		}

		ul :nth-child(1) {
			transition: translate .5s ease-in-out .8s;

		}

		ul :nth-child(2) {
			transition: translate .5s ease-in-out .9s;
		}

		ul :nth-child(3) {
			transition: translate .5s ease-in-out 1s;
		}

		ul :nth-child(4) {
			transition: translate .5s ease-in-out 1.1s;
		}

		ul :nth-child(5) {
			transition: translate .5s ease-in-out 1.2s;
		}

		ul :nth-child(6) {
			transition: translate .5s ease-in-out 1.3s;
		}
  }

	.bg {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	div.bg div {
		content: '';

		width: 150%;
		height: 200%;
		position: absolute;

		left: 0;
		top: 0;

		will-change: translate, transition;
		background-color: $red;
		transition: translate .8s ease-in-out .5s;
		z-index: -1;
	}

	.bg .top-right {
		translate: 0% -100%;
		border-bottom-left-radius: 150vw;
	}

	&.opened .bg .top-right {
		translate: 0% 0%;
		transition: translate .8s ease-in-out 0s;
	}
}

}


@media screen and (min-width: 900px) {
.mobile {
	filter: opacity(0);
	pointer-events: none;
}


/* For the logo */
.logo {
  width: 80px;
}

/* Header */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  background-color: $background;
  padding: 1em 2em;
}


/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

	position: relative;
  gap: .5em;
  margin: 0;
	padding: 0;

  /* remove items list icon */
  li.navbar-item {
    list-style: none;
  }
}
}

</style>
