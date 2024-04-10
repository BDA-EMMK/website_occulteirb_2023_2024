
<script lang="ts">
import type { HeaderNavData } from "./headerNav";

import { createEventDispatcher } from "svelte";

export let headerNavData: HeaderNavData = {
	URL: "/error_url_not_set",
	text: "NOT SET !",
};

export let active: boolean;

const dispatch = createEventDispatcher();

function forwardClick() {
  dispatch('click');
}

</script>

<a href="{ headerNavData.href ?? headerNavData.URL }" on:click={forwardClick} class:active>
  <div class="hover_effect" />
  <p>{ headerNavData.text }</p>
</a>

<style lang="scss">
@import '$lib/theme.scss';

@media screen and (max-width: 899px) {
/* Navbar links style */
a {
  position: relative;
  display: block;
  padding: .5rem 1.5rem;

  p {
    display: inline-block;
    position: relative;
    line-height: 0;
    padding: 2rem 0;

    font-size: 4rem;
		color: $header-foreground;
  }
}

}

@media screen and (min-width: 899px) {
/* Navbar links style */
a {
  padding: .5rem 1.5rem;

  position: relative;
  display: block;
	pointer-events: auto;

  p {
    font-size: 3rem;

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
      background-color: $header-background;

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
      left: 1rem;
      top: 0%;

      width: .2rem;
      height: 100%;

      border-radius: 1px;

      translate: 0 -150%;
    }
  }

	/* The active root style */
	&.active {
		p {
			color: $header-background;
		}

		.hover_effect::before, .hover_effect::after {
			opacity: 1;
		}

		.hover_effect::before {
			translate: .5rem 0;
		}

		.hover_effect::after {
			translate: 0 10%;
		}
	}


  /*
    Nice visual effects on hover
  */
  &:hover:not(.active) {
    .hover_effect {
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
      color: $foreground;
      transform: scale(1.05);
    }
  }
}
}
</style>
