
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
  background: $background;

  top: 0;

  display: flex;
  flex-direction: row-reverse;

  width: 100vw;
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
  width: 100vw;
  height: 100dvh;
  position: fixed;

  overflow: scroll;

  left: 0;
  top: 0;

  background: red;

  nav {
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 10svh;
  }


  z-index: 2;
  transform: translate(100%, -20%);

  transition: transform .5s cubic-bezier(0.19, 1, 0.22, 1);

  &.opened {
    transform: translate(0%);
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

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;

    font-size: 2rem;

    li { list-style: none;}
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

header {
  width: 100vw;
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
