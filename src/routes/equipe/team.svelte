
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
		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 90%;

			width: 100%;
			aspect-ratio: 1014 / 178;
			border: 0;
			margin: 0;
			background-image: url('/img/separation_entre_polev2.svg');
			background-size: cover;
		}
		margin: 7svh 0;
		position: relative;

    font-size: 4rem;
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
	align-items: center;

  gap: 5em;
  padding: 10rem 5vw;

  h3 {
		margin: 0 0 10rem 0;
		position: relative;

    font-size: 5rem;
    text-align: center;

		/* Decoration */
		&::before {
			content: "";
			position: absolute;
			left: calc((100% - 40rem) / 2);
			top: 90%;

			width: 40rem;
			aspect-ratio: 1014 / 178;
			background-image: url('/img/separation_entre_polev2.svg');
			background-size: cover;
		}
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

