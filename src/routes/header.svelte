
<script lang="ts">
import HeaderLink from "./headerLink.svelte";
import { onMount } from "svelte";
import { page } from '$app/stores';  

let path = "";
let isLoaded: boolean = false;

onMount(() => {
  isLoaded = true
});

$: if (isLoaded) { path = $page.url.pathname };

const links = [
  {
    url: '/',
    text: 'Accueil'
  },
  {
    url: '/equipe',
    text: 'Équipe'
  },
  {
    url: '/allo',
    text: 'Allos'
  },
  {
    url: '/partenaires',
    text: 'Partenaires'
  },
  {
    url: '/video',
    text: 'Vidéo'
  },
  {
    url: '/jeu',
    text: 'Jeu'
  },
];

</script>

<header class="header">
  <nav>
    <!-- Left side logo -->
    <a href="/" class="logo-link">
      <img class="logo" src="/img/logos/eye_logo.png" alt="Logo">
    </a>

    <!-- Navbar to the right -->
    <ul class="navbar">
    {#each links as link}
      <li>
        <HeaderLink url="{link.url}" text="{link.text}" active={ path === link.url }/>
      </li>
    {/each}
    </ul>
  </nav>
</header>


<style lang="scss">
:root {
  --header-background-color: rgba(50, 50, 50, 255);
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

  background-color: var(--header-background-color);
  padding: 1em 2em;
}


/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: .5em;
  margin: 0;

  background-color: var(--header-background-color);

  /* remove items list icon */
  li {
    list-style: none;
  }
}
</style>
