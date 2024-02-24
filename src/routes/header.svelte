
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

<div class="mobile">
  <button class="toggleHeader" on:click={toggleNav}>Toggle</button>
</div>

<header class="header {isNavOpened ? 'opened': ''}"  >
	<div class="bg">
		<div class="top-right"></div>
		<div class="bottom-left"></div>
	</div>

  <nav>
    <!-- Left side logo -->
    <a href="/" class="logo-link" on:click={toggleNav}>
      <img class="logo" src="/img/logos/eye_logo.png" alt="Logo">
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

@media screen and (max-width: 899px) {
.mobile {
  position: sticky;
  background: transparent;

  top: 0;

  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  min-height: 4em;
  height: 5svh;

  z-index: 3;

  .toggleHeader {
    position: relative;
    top: 0;
    right: 5vw;


    font-family: 'Protest Revolution', cursive;
    font-size: 2rem;

    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;
    background: transparent;
		color: $foreground;

		&:hover { cursor: pointer; }
  }
}

.header {
  width: 100%;
  height: 100%;
  position: fixed;

  overflow: scroll;
  pointer-events: none;  /* Do not prevent from click nav ... */
	&.opened { pointer-events: auto; }

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

    padding: 2em 1em;

    .logo {
      max-width: 75%;
      position: relative;
    }
  }

	.logo-link, li {
		transform: translateX(100vw);
		filter: opacity(0);
	}

	.logo-link {
		transition: transform .5s ease-in-out 0s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(1) {
		transition: transform .5s ease-in-out .1s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(2) {
		transition: transform .5s ease-in-out .2s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(3) {
		transition: transform .5s ease-in-out .3s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(4) {
		transition: transform .5s ease-in-out .4s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(5) {
		transition: transform .5s ease-in-out .5s, filter .5s ease-in-out 0s;
	}

	ul :nth-child(6) {
		transition: transform .5s ease-in-out .6s, filter .5s ease-in-out 0s;
	}

  &.opened {
		.logo-link, li {
			transform: translate(0%);
			filter: opacity(1);
		}

		.logo-link {
			transition: transform .5s ease-in-out .7s, filter .5s ease-in-out .7s;
		}

		ul :nth-child(1) {
			transition: transform .5s ease-in-out .8s, filter .5s ease-in-out .8s;

		}

		ul :nth-child(2) {
			transition: transform .5s ease-in-out .9s, filter .5s ease-in-out .9s;
		}

		ul :nth-child(3) {
			transition: transform .5s ease-in-out 1s, filter .5s ease-in-out 1s;
		}

		ul :nth-child(4) {
			transition: transform .5s ease-in-out 1.1s, filter .5s ease-in-out 1.1s;
		}

		ul :nth-child(5) {
			transition: transform .5s ease-in-out 1.2s, filter .5s ease-in-out 1.2s;
		}

		ul :nth-child(6) {
			transition: transform .5s ease-in-out 1.3s, filter .5s ease-in-out 1.3s;
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

		width: 100%;
		height: 100%;
		position: absolute;

		left: 0;
		top: 0;

		background-color: $red;
		transition: transform .8s ease-in-out .5s;
		z-index: -1;
	}

	.bg .top-right {
		transform: translate(70%, -100%);
		border-bottom-left-radius: 100%;
	}

	.bg .bottom-left {
		transform: translate(-70%, 100%);
		border-top-right-radius: 100%;
	}


	&.opened .bg .top-right {
		transform: translate(-0%, -0%);
		transition: transform .8s ease-in-out 0s;
	}

	&.opened .bg .bottom-left {
		transform: translate(-0%, -0%);
		transition: transform .8s ease-in-out 0s;
	}

}

}


@media screen and (min-width: 900px) {
.mobile {
  display: none;
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
