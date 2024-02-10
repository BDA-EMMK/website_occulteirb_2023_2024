
<script lang="ts">

import type { Member } from './+page.svelte';
import MemberCard from './memberCard.svelte';

export let members: Member[] = [];
export let desc: string = "Unset desc";
</script>

<div class="team">
  <h3>{ desc }</h3>

  <ul>
    {#each members as member}
      <li>
        <MemberCard member="{member}" />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">

.team {
  display: flex;
  flex-direction: column;

  gap: 5em;

  padding: 10em 10em;

  h3 {
    font-size: 2em;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li { list-style: none; }
  }
}

</style>

