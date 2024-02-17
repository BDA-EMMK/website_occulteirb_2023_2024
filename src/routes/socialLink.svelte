
<script lang="ts">

export let socialLinkData: SocialLinkData = {
	URL: "/error_url_not_set",
	IMG: "NOT_SET",
	ALT: "ALT_NOT_SET",
	text: "NOT SET !"
}

export let active: boolean;


</script>

<a href="{ socialLinkData.URL }" target="_blank">
  <img src="{ socialLinkData.IMG }" alt="{ socialLinkData.ALT }">
  <p>{ socialLinkData.text }</p>
</a>

<style lang="scss">
@import '$lib/theme.scss';

/* Social links style */
a {
  text-decoration: none;
  
  position: fixed;
  bottom: 20px;
  left: 20px;
  transform: translateX(0);
  z-index: 1000;

  p {
    font-size: 1.5rem;

    color: $foreground;
    text-decoration: none;
    border-radius: 5px;

    position: relative;
    line-height: 0;

    display: inline-block;

    transition: background-color 0.3s;
  }

  img {
   width: 40px;
   height: 40px;
}

  .hover_effect {
    border: 3px solid $foreground;
    }
  
</style>

