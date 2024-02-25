
<script lang="ts">
import type { HeaderNavData } from "./headerNav";

import { createEventDispatcher } from "svelte";

export let headerNavData: HeaderNavData = {
	URL: "/error_url_not_set",
	text: "NOT SET !"
}

export let active: boolean;


const dispatch = createEventDispatcher();

function forwardClick() {
  dispatch('click');
}

</script>

<a href="{ headerNavData.URL }" on:click={forwardClick}>
  <div class="hover_effect" class:active/>
  <p>{ headerNavData.text }</p>
</a>

<style lang="scss">
@import '$lib/theme.scss';

@media screen and (max-width: 899px) {
/* Navbar links style */
a {
  position: relative;
  display: block;
  padding: .5em 1.5em;

  p {
    display: inline-block;
    position: relative;
    line-height: 0;
    padding: 2rem 0;

    font-size: 4rem;
  }
}

}

@media screen and (min-width: 899px) {
/* Navbar links style */
a {
  padding: .5em 1.5em;

  position: relative;
  display: block;

  p {
    font-size: 2rem;

    padding: 2rem 0;

    position: relative;
    line-height: 0;

    display: inline-block;

    transition: color 0.3s cubic-bezier(.22, .61, .36, 1), transform .3s ease-in-out;
  }

  .hover_effect {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
		pointer-events: none;

		&::before, &::after {
      content: "";

      position: absolute;
      background-color: $red;

      opacity: 0;
      transition: translate 0.4s ease-in-out, opacity 0.3s ease-in-out;
		}

    &::before {
      left: 0%;
      bottom: 20%;

      width: 95%;
      height: 1%;

      border-radius: 4px;

      translate: -150% 0;
    }

    &::after {
      left: 1em;
      top: 0%;

      width: .2em;
      height: 100%;

      border-radius: 1px;

      translate: 0 -150%;
    }

    &.active {
			&::before, &::after {
				opacity: 1;
			}

			&::before {
				translate: .5em 0;
			}

			&::after {
				translate: 0 10%;
			}
		}

  }


  /*
    Nice visual effects on hover
  */
  &:hover {
    .hover_effect:not(.active) {
			&::before, &::after {
				opacity: 1;
			}

			&::before {
				translate: 0 0;
			}

			&::after {
				translate: 0 0;
			}
		}

    p {
      color: $red;
      transform: scale(1.05);
    }
  }
}
}
</style>
