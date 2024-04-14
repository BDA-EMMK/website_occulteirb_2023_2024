<script lang="ts">
import type { SocialLinkData } from "./socialLink";
import SocialLink from "./socialLink.svelte";

import Header from "./header.svelte";
import Footer from './footer.svelte';

import { onMount } from "svelte";
import { afterNavigate } from "$app/navigation"
import type { AfterNavigate } from "@sveltejs/kit";

const socialLinks: SocialLinkData[] = [
  {
    URL: "https://place.nemodacremont.me/api/s3cr3t-3ndp01nt",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiA+Cgk8ZGVmcyA+CgkJPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNFOEU2RTM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fS5jbHMtMntmaWxsOiNFOEU2RTM7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciA2IiBpZD0iTGF5ZXJfNiI+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAuNTQsNTFIMTcuMjJhNC42NCw0LjY0LDAsMCwxLTQuNjMtNC42MlYxNy4yOGE0LjY0LDQuNjQsMCwwLDEsNC42My00LjYzSDQ1LjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC40MywxNy4yOFY0Ni4zNkE0LjY0LDQuNjQsMCwwLDEsNDUuOCw1MWgtOSIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDgiIGN5PSIxMy45NSIgcj0iMSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwLjU0LDUxVjM4LjUxaC00LjRWMzIuNTdoNC40VjI2Ljg0YTYsNiwwLDAsMSw2LTZoNi4yM3Y1LjY1SDM4LjIxQTEuNDcsMS40NywwLDAsMCwzNi43NCwyOHY0LjU0aDZ2NmgtNlY1MSIvPgoJPC9nPgoJPHVzZSBocmVmPSIjZmFjZWJvb2stbG9nbyIvPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Facebook !",
    text: ""
  },
  {
    URL: "https://www.instagram.com/occulteirb",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O30gLmNscy0ye2ZpbGw6I0U4RTZFMzt9PC9zdHlsZT4KCTwvZGVmcz4KCTx0aXRsZS8+Cgk8ZyBkYXRhLW5hbWU9IkxheWVyIDYiIGlkPSJMYXllcl82Ij4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4zOSwxNy40NlY0Ni41NGE0LjY0LDQuNjQsMCwwLDEtNC42Miw0LjYzSDE3LjE4YTQuNjQsNC42NCwwLDAsMS00LjYyLTQuNjJWMTcuNDZhNC42NCw0LjY0LDAsMCwxLDQuNjItNC42M0g0NS43NyIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDQiIGN5PSIxNC4xMyIgcj0iMSIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMzkuMDMiIGN5PSIyNSIgcj0iMSIvPgoJCTxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjc3LDIwLjMyYTMuNzUsMy43NSwwLDAsMC0zLjQ3LDMuNzRWMzkuOTRhMy43NywzLjc3LDAsMCwwLDMuNzYsMy43Nmg4LjU5Ii8+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzIuNjUsNDMuN2g3LjI5YTMuNzcsMy43NywwLDAsMCwzLjc2LTMuNzZWMjQuMDZhMy43NywzLjc3LDAsMCwwLTMuNzYtMy43NkgyNC4wNmExLjM3LDEuMzcsMCwwLDAtLjI5LDAiLz4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNCwyNi43NEE1LjY0LDUuNjQsMCwxLDAsMzcuNjQsMzIiLz4KCTwvZz4KCTx1c2UgaHJlZj0iI2luc3RhZ3JhbS1sb2dvIi8+Cjwvc3ZnPgoK",
    ALT: "Rejoignez Notre Instagram !",
    text: ""
  },
  {
    URL: "https://t.me/Occulteirb",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciAyIiBpZD0iTGF5ZXJfMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMuNTUsMzcuNTYsNDEuNjksMjMuOGEuMTQuMTQsMCwwLDEsLjE1LjIzTDE5LjY2LDQyYTIuMDYsMi4wNiwwLDAsMC0uNzcsMS42djguODFhLjQxLjQxLDAsMCwwLC42MS4zNmw3Ljc1LTQuM2gwbDYuODUsNC44QS44My44MywwLDAsMCwzNS4zLDUzTDYwLDExLjA2YS4zMS4zMSwwLDAsMC0uMzctLjQ0TDQuNTQsMzFhLjgzLjgzLDAsMCwwLS4xOSwxLjQ1bDcuMTEsNUEyLjA2LDIuMDYsMCwwLDAsMTMuNTUsMzcuNTZaIi8+PC9nPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Telegram !",
    text: ""
  },
];

let showSocial: boolean = false;

let isNavOpened: boolean = false;
let bodyElement: HTMLBodyElement | null = null

onMount(() => {
	bodyElement = document.querySelector('body');

	// Show or hide social links
	window.onscroll = (_event) => {
		if (window.visualViewport)
			showSocial = window.scrollY > window.visualViewport.height / 5;
	}
});

const onOpenNav = () => {
	if (bodyElement !== null)
		bodyElement.classList.add('block-scrolling');
}

const onCloseNav = () => {
	if (bodyElement !== null)
		bodyElement.classList.remove('block-scrolling');
}

const allosRoutesRegexs: RegExp = /(\/allo)|(\/commandeAllo)/;

// Returns true if shouldn't scroll to top on navigation
const excludeFilterScrollOnTop: ((nav: AfterNavigate) => boolean)[]= [
	(nav: AfterNavigate) =>
	/* Type checking */
		nav.from !== null &&
		nav.to !== null &&
		nav.from.route.id !== null &&
		nav.to.route.id !== null &&

	/* Actual test */
		allosRoutesRegexs.test(nav.from.route.id) &&
		allosRoutesRegexs.test(nav.to.route.id),
];

afterNavigate((nav) => {
	for (let i = 0 ; i < excludeFilterScrollOnTop.length ; ++i)
		if (excludeFilterScrollOnTop[i](nav))
			return;

	// window.scrollTo(0, 0);
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

<main id="page" class="{ isNavOpened ? 'hide-overflow': ''}">
  <Header onOpenNav="{ onOpenNav }" onCloseNav="{ onCloseNav }" />

  <slot />

  <Footer />
</main>


<style lang="scss">
@import '$lib/theme.scss';

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

  z-index: 1000;

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


/* Begin mobile media query */
@media screen and (max-width: 899px) {

}
/* End mobile media query */

/* Begin desktop media query */
@media screen and (min-width: 900px) {

}
/* End desktop media query */

main {
	color: $foreground;
	background-color: $background;

  height: 100svh;

	scroll-behavior: smooth;
}

</style>
