
<script lang="ts">
import type { SocialLinkData } from './socialLink';

export let socialLinkData: SocialLinkData = {
	URL: "/error_url_not_set",
	IMG: "NOT_SET",
	ALT: "ALT_NOT_SET",
	text: "NOT SET !"
};

// export let active: boolean;
</script>

<a href="{ socialLinkData.URL }" target="_blank">
  <img src="{ socialLinkData.IMG }" alt="{ socialLinkData.ALT }">
  <!-- <p>{ socialLinkData.text }</p> -->
</a>

<style lang="scss">
@import '$lib/theme.scss';

/* Social links style */
a {
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: .2vw;

  img {
   width: 40px;
   height: 40px;
  }

  &::after {
    content: "";

    position: absolute;
    padding: inherit;

    width: 100%;
    height: 100%;

    opacity: 0;
    transition: opacity ease-in-out .2s;
    border: 3px solid $foreground;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
}
</style>

