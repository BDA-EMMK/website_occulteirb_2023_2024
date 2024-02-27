
<script lang="ts">
import type { Member } from './member';

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
@import '$lib/theme.scss';

@media screen and (max-width: 899px) {
.team {
  display: flex;
  flex-direction: column;

  gap: 5em;
  padding: 5vw;

  h3 {
    font-size: 3rem;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 1em;
  }
}

}

@media screen and (min-width: 899px) {
.team {
  display: flex;
  flex-direction: column;

  gap: 5em;
  padding: 5vw;

  h3 {
    font-size: 2rem;
    text-align: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 1em;
    width: 100%;

    li { list-style: none; }
  }
}
}
</style>

