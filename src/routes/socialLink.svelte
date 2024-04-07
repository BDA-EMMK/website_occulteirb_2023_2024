
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

<a href="{ socialLinkData.URL }" target="_blank" aria-label="{ socialLinkData.ALT }">
	<div class="logo-img" style="{ `background-image: url(${socialLinkData.IMG})` }"></div>
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
  transition: filter ease-in-out .2s;

  .logo-img {
		width: 48px;
		height: 48px;

		background-size: cover;
		color: white;
  }

  &:hover {
    filter: drop-shadow(0 0 0.75rem $foreground);
  }
}
</style>

