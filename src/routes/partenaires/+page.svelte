
<script lang="ts">

import type { Partner } from './partner';

import PartnerCard from "./partnerCard.svelte";

const partners: Partner[] = [
  {
    name: "openAI",
    imgURL: "/img/troll/openai.png",
    desc: "Des randoms"
  },
  {
    name: "The Rock !",
    imgURL: "/img/troll/the_rock.jpg",
    desc: "Un random"
  }
]

</script>

<!-- The part -->
<h1>
  Les partenaires !
</h1>

<section class="pole-section">
  <div class="partners">

    {#each partners as partner}
      <PartnerCard partner={partner} />
    {/each}

 </div>
</section>


<style lang="scss">
/* For the team */
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

