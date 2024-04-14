<script lang="ts">
import API from "$lib/api";
import Auth from "$lib/auth";
    import LoginButton from "$lib/login-button.svelte";
import { onDestroy, onMount } from "svelte";

let videoURL: string = "";  // 
const revealDate = new Date(2024, 3, 15, 14);
let timer: Date = new Date(revealDate.getTime() - new Date().getTime());;
let intervalId: number | null = null;

onMount(async () => {
  const token = Auth.getToken();
  if (token !== '')
    videoURL = await API.getVideoLink(token);

  if (videoURL === 'notyet') {
    intervalId = setInterval(() => {
      if (timer !== undefined) {
        const newTimer = new Date(revealDate.getTime() - (new Date()).getTime());
        timer = newTimer;
      }
    }, 1000);
  }
});

onDestroy(() => {
  if (intervalId !== null)
    clearInterval(intervalId);
});
</script>

<section class="video-container">
  {#if videoURL === ''}
		<div class="no-auth">
			<h2>Authentifiez vous pour voir la vidéo !</h2>
			<LoginButton action='login' />
		</div>

  {:else if videoURL === 'notyet'}
		<h2 class="timer">{ timer.getHours() }:{ timer.getMinutes() }:{ timer.getSeconds() }</h2>

  {:else} 
    <!-- For the video -->
    <div class="video-container" id="videoContainer" >
      <iframe width="560" height="315" src="{videoURL}" title="YouTube video player" allowfullscreen></iframe>
    </div>
  {/if}
</section>


<style lang="scss">
@import "$lib/theme.scss";

.timer {
  font-size: 7rem;
  letter-spacing: .5rem;
}

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
