
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
export let onNavToggle: (newState: boolean) => void = () => {};

function toggleNav() {
	isNavOpened = !isNavOpened;

	if (isNavOpened && header)
		header.scrollTo(0, 0);

	onNavToggle(isNavOpened);
}
</script>

<header class="header {isNavOpened ? 'opened': ''}"  >
	<div class="mobile">
		<button class="toggleHeader" aria-label="Show header" on:click={toggleNav}>
			<div class="hamburger-top"></div>
			<div class="hamburger-mid"></div>
			<div class="hamburger-bot"></div>
		</button>
	</div>

  <nav>
    <!-- Left side logo -->
    <a href="/" class="logo-link" on:click={toggleNav}>
			<div class="logo"></div>
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

header {
	z-index: 100;
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
	pointer-events: auto;

  top: 0;

  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  min-height: 4rem;
  height: 5svh;

  z-index: 3;

  .toggleHeader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

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
			transition: background-color .5s ease-in-out, transform .5s ease-in-out;
		}

		.hamburger-mid { 
			will-change: transform, filter;
			transition: transform .5s ease-in-out, filter .5s ease-in-out, background-color .5s ease-in-out;
		}
  }
}

.header {
  width: 100%;
  height: 100%;
  position: fixed;

  overflow: hidden;
  pointer-events: none;  /* Do not prevent from click nav ... */

  left: 0;
  top: 0;

  z-index: 2;

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
			aspect-ratio: 1 / 1;

			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjY0cHgiIGlkPSJJY29ucyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBpZD0idmlzdWFsX2lkZW50aXRpZXMiPjxnPjxwYXRoIGQ9Ik0zMiwyNGMtNC40MTksMC04LDMuNTgxLTgsOHMzLjU4MSw4LDgsOHM4LTMuNTgxLDgtOFMzNi40MTksMjQsMzIsMjR6IE0zMiwzOWMtMy44NjYsMC03LTMuMTM0LTctNyAgICBzMy4xMzQtNyw3LTdzNywzLjEzNCw3LDdTMzUuODY2LDM5LDMyLDM5eiIgZmlsbD0iIzJCNDE0RCIvPjxwYXRoIGQ9Ik0zMiwxN2MxMi42MTUsMCwyMy4zNTQsMTIuMTI5LDI1LjcyLDE1QzU1LjM1NCwzNC44NzEsNDQuNjE1LDQ3LDMyLDQ3UzguNjQ2LDM0Ljg3MSw2LjI4LDMyICAgIEM4LjY0NiwyOS4xMjksMTkuMzg1LDE3LDMyLDE3IE0zMiwxNkMxNy4wODIsMTYsNSwzMiw1LDMyczEyLjA4MiwxNiwyNywxNnMyNy0xNiwyNy0xNlM0Ni45MTgsMTYsMzIsMTZMMzIsMTZ6IiBmaWxsPSIjMzc0NzRGIi8+PHBhdGggZD0iTTMyLDE5YzcuMTY4LDAsMTMsNS44MzIsMTMsMTNzLTUuODMyLDEzLTEzLDEzcy0xMy01LjgzMi0xMy0xM1MyNC44MzIsMTksMzIsMTkgTTMyLDE4ICAgIGMtNy43MzUsMC0xNCw2LjI2NS0xNCwxNHM2LjI2NSwxNCwxNCwxNHMxNC02LjI2NSwxNC0xNFMzOS43MzUsMTgsMzIsMThMMzIsMTh6IiBmaWxsPSIjMzc0NzRGIi8+PGc+PHBhdGggZD0iTTMyLDM3LjQ5N2MtMS40MDgsMC0yLjgxNi0wLjUzNi0zLjg4OS0xLjYwOGwwLjcwNy0wLjcwN2MxLjc1NCwxLjc1NCw0LjYwOSwxLjc1NCw2LjM2MywwICAgICBjMC44NS0wLjg1LDEuMzE3LTEuOTc5LDEuMzE3LTMuMTgycy0wLjQ2OC0yLjMzMi0xLjMxNy0zLjE4MmwwLjcwNy0wLjcwN2MxLjAzOSwxLjAzOCwxLjYxLDIuNDE5LDEuNjEsMy44ODkgICAgIGMwLDEuNDY5LTAuNTcxLDIuODUxLTEuNjEsMy44ODlDMzQuODE2LDM2Ljk2MSwzMy40MDgsMzcuNDk3LDMyLDM3LjQ5N3oiIGZpbGw9IiMzNzQ3NEYiLz48L2c+PC9nPjwvZz48L3N2Zz4=);
			background-size: cover;
    }
  }

	.logo-link, li {
		will-change: translate, transition;
		translate: 100vw 0vw;
		/* opacity: 0; */
	}

	.logo-link {
		transition: translate .4s ease-in-out .6s;
	}

	ul :nth-child(1) {
		transition: translate .4s ease-in-out .5s;
	}

	ul :nth-child(2) {
		transition: translate .4s ease-in-out .4s;
	}

	ul :nth-child(3) {
		transition: translate .4s ease-in-out .3s;
	}

	ul :nth-child(4) {
		transition: translate .4s ease-in-out .2s;
	}

	ul :nth-child(5) {
		transition: translate .4s ease-in-out .1s;
	}

	ul :nth-child(6) {
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
	/* filter: opacity(0); */
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
