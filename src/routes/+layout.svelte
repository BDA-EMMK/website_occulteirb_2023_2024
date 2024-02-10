
<script>
import Header from "./header.svelte";
import Footer from './footer.svelte';

export const prerender = true;
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
</style>

