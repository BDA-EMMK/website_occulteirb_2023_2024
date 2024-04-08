
<script lang="ts">
import API from "$lib/api";
import Auth from "$lib/auth";
    import LoginButton from "$lib/login-button.svelte";
import { onMount } from "svelte";

let videoURL: string = "";  // 

onMount(async () => {
  const token = Auth.getToken();
  if (token !== '')
    videoURL = await API.getVideoLink(token);
});
</script>

<section class="video-container">
  {#if videoURL !== ''}
    <!-- For the video -->
    <div class="video-container" id="videoContainer" >
      <iframe width="560" height="315" src="{videoURL}" title="YouTube video player" allowfullscreen></iframe>
    </div>

  {:else} 
		<div class="no-auth">
			<h2>Authentifiez vous pour voir la vidéo !</h2>
			<LoginButton action='login' />
		</div>
  {/if}
</section>


<style lang="scss">
.no-auth {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100svh;
	gap: 5rem;

	padding: 2rem;
	box-sizing: border-box;

	h2 {
		font-size: 3rem;
		text-align: center;
	}
}

/* For the video */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100svh;
  width: 100%;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
