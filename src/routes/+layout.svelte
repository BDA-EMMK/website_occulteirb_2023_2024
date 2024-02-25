
<script lang="ts">
import Header from "./header.svelte";
import Footer from './footer.svelte';

import { onMount } from "svelte";

let loaded: boolean = false
let endloaded: boolean = false

onMount(() => {
  loaded = true;

  setTimeout(() => { endloaded = true }, 1000)
});
</script>

<div class="loading" class:loaded class:endloaded></div>

<main>
  <Header />

  <slot />

  <Footer />
</main>


<style lang="scss">
@import '$lib/theme.scss';

@keyframes loading-screen {
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

  transition: opacity 1s;
  pointer-events: none;  /* Do not prevent from click nav ... */

  &::after {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

		translate: 0% 100%;
		transition: translate .5s;
    background-color: $red;
		animation: 3s ease-in-out 0s forwards loading-screen;
  }

  &.loaded {
    opacity: 0;

  }

  &.endloaded {
  }
}

main {
  overflow-y: auto;

	color: $foreground;
	background-color: $background;

  max-height: 100vh;
}

</style>

