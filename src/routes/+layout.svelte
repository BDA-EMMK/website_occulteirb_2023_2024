
<script>
import Header from "./header.svelte";
import Footer from './footer.svelte';

// Used for static generation, ive no idea what is does
export const prerender = true;
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style lang="scss">
</style>

