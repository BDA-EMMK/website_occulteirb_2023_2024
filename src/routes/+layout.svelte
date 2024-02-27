
<script lang="ts">
import type { SocialLinkData } from "./socialLink";
import SocialLink from "./socialLink.svelte";

import Header from "./header.svelte";
import Footer from './footer.svelte';

import { onMount } from "svelte";

let loaded: boolean = false
let endloaded: boolean = false

const socialLinks: SocialLinkData[] = [
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiA+Cgk8ZGVmcyA+CgkJPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNFOEU2RTM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fS5jbHMtMntmaWxsOiNFOEU2RTM7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciA2IiBpZD0iTGF5ZXJfNiI+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAuNTQsNTFIMTcuMjJhNC42NCw0LjY0LDAsMCwxLTQuNjMtNC42MlYxNy4yOGE0LjY0LDQuNjQsMCwwLDEsNC42My00LjYzSDQ1LjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC40MywxNy4yOFY0Ni4zNkE0LjY0LDQuNjQsMCwwLDEsNDUuOCw1MWgtOSIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDgiIGN5PSIxMy45NSIgcj0iMSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwLjU0LDUxVjM4LjUxaC00LjRWMzIuNTdoNC40VjI2Ljg0YTYsNiwwLDAsMSw2LTZoNi4yM3Y1LjY1SDM4LjIxQTEuNDcsMS40NywwLDAsMCwzNi43NCwyOHY0LjU0aDZ2NmgtNlY1MSIvPgoJPC9nPgoJPHVzZSBocmVmPSIjZmFjZWJvb2stbG9nbyIvPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Facebook !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O30gLmNscy0ye2ZpbGw6I0U4RTZFMzt9PC9zdHlsZT4KCTwvZGVmcz4KCTx0aXRsZS8+Cgk8ZyBkYXRhLW5hbWU9IkxheWVyIDYiIGlkPSJMYXllcl82Ij4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4zOSwxNy40NlY0Ni41NGE0LjY0LDQuNjQsMCwwLDEtNC42Miw0LjYzSDE3LjE4YTQuNjQsNC42NCwwLDAsMS00LjYyLTQuNjJWMTcuNDZhNC42NCw0LjY0LDAsMCwxLDQuNjItNC42M0g0NS43NyIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDQiIGN5PSIxNC4xMyIgcj0iMSIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMzkuMDMiIGN5PSIyNSIgcj0iMSIvPgoJCTxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjc3LDIwLjMyYTMuNzUsMy43NSwwLDAsMC0zLjQ3LDMuNzRWMzkuOTRhMy43NywzLjc3LDAsMCwwLDMuNzYsMy43Nmg4LjU5Ii8+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzIuNjUsNDMuN2g3LjI5YTMuNzcsMy43NywwLDAsMCwzLjc2LTMuNzZWMjQuMDZhMy43NywzLjc3LDAsMCwwLTMuNzYtMy43NkgyNC4wNmExLjM3LDEuMzcsMCwwLDAtLjI5LDAiLz4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNCwyNi43NEE1LjY0LDUuNjQsMCwxLDAsMzcuNjQsMzIiLz4KCTwvZz4KCTx1c2UgaHJlZj0iI2luc3RhZ3JhbS1sb2dvIi8+Cjwvc3ZnPgoK",
    ALT: "Rejoignez Notre Instagram !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciAyIiBpZD0iTGF5ZXJfMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMuNTUsMzcuNTYsNDEuNjksMjMuOGEuMTQuMTQsMCwwLDEsLjE1LjIzTDE5LjY2LDQyYTIuMDYsMi4wNiwwLDAsMC0uNzcsMS42djguODFhLjQxLjQxLDAsMCwwLC42MS4zNmw3Ljc1LTQuM2gwbDYuODUsNC44QS44My44MywwLDAsMCwzNS4zLDUzTDYwLDExLjA2YS4zMS4zMSwwLDAsMC0uMzctLjQ0TDQuNTQsMzFhLjgzLjgzLDAsMCwwLS4xOSwxLjQ1bDcuMTEsNUEyLjA2LDIuMDYsMCwwLDAsMTMuNTUsMzcuNTZaIi8+PC9nPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Telegram !",
    text: ""
  },
];

let showSocial: boolean = false;

onMount(() => {
  setTimeout(() => { endloaded = true }, 1000);

	window.onscroll = () => {
		if (window.visualViewport)
			showSocial = window.scrollY > window.visualViewport.height / 10;
	}

	if (document.readyState === 'complete')
		loaded = true;

	window.addEventListener("load", (_) => {
		loaded = true;
	});
});
</script>

<div class="social-links" class:showSocial>
  <ul>
    {#each socialLinks as socialLink}
      <li>
        <SocialLink socialLinkData="{ socialLink }" />
      </li>
    {/each}
  </ul>
</div>

<div class="loading" class:loaded class:endloaded></div>

<main id="page">
  <Header />

  <slot />

  <Footer />
</main>


<style lang="scss">
@import '$lib/theme.scss';

@keyframes loading-screen {
	0% {
    translate: 0% 100%;
	}
	20% {
    translate: 0% 60%;
	}
	30% {
    translate: 0% 50%;
	}
	45% {
    translate: 0% 30%;
	}
	60% {
    translate: 0% 15%;
	}
	100% {
    translate: 0% 0%;
	}
}


/* Begin mobile media query */
@media screen and (max-width: 899px) {

.social-links {
  position: fixed;
  bottom: 0;
  left: 0;

	transform: translateY(100%);
	transition: transform .5s ease-in-out;

	&.showSocial { transform: translateY(0%); }
	

	padding: 2vw;

	background: rgba($background, .61);
	backdrop-filter: blur(5px);

	border-top-right-radius: 1rem;

  z-index: 1;

  ul {
    margin: 0;
    padding: 0;

    display: flex;
    gap: .5em;

    position: relative;

    li {
      list-style: none;
    }
  }
}

}
/* End mobile media query */

/* Begin desktop media query */
@media screen and (min-width: 900px) {
.social-links {
  position: fixed;

	background: rgba($background, .61);
	backdrop-filter: blur(5px);

	border-top-right-radius: 1rem;

  bottom: 0;
  left: 0;

	padding: 2vw;

  z-index: 1;

  ul {
    margin: 0;
    padding: 0;

    display: flex;
    gap: .5em;

    position: relative;

    li {
      list-style: none;
    }
  }
}
}
/* End desktop media query */



.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: $background;

	will-change: opacity;
	opacity: 1;
  transition: opacity ease-in-out 3s 1s;

	&.loaded::after { content: 'Loaded !'; }

  &::after {
    content: "";
		display: flex;
		justify-content: center;
		font-size: 5rem;
		color: $foreground;

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    background-color: $red;

		translate: 0% 100%;
		will-change: translate;

		animation: 10s ease-in-out 0s forwards loading-screen;
  }

  &.loaded {
    opacity: 0;
		pointer-events: none;  /* Do not prevent from click nav ... */
  }
}

main {
	color: $foreground;
	background-color: $background;

  min-height: 100svh;

	scroll-behavior: smooth;
}

</style>

