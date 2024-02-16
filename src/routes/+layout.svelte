
<script>
import Header from "./header.svelte";
import Footer from './footer.svelte';

</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
@import '$lib/theme.scss';

main {
  overflow-y: hidden;

	color: $foreground;
	background-color: $background;
}

</style>

