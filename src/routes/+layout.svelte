
<script lang="ts">
import Header from "./header.svelte";
import Footer from './footer.svelte';

import { onMount } from "svelte";
import { afterNavigate } from '$app/navigation';

let loaded: boolean = false
let endloaded: boolean = false

onMount(() => {
  loaded = true;

  setTimeout(() => { endloaded = true }, 1000)
});

afterNavigate(() => {
	document.getElementById('page')?.scrollTo(0, 0);
});
</script>

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

.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;

  z-index: 999;

  background-color: $background;

	will-change: opacity;
	opacity: 1;
  transition: opacity ease-in-out 3s;

  &::after {
    content: "";

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
  overflow-y: auto;

	color: $foreground;
	background-color: $background;

  max-height: 100vh;
  min-height: 100svh;

	scroll-behavior: smooth;
}

</style>

