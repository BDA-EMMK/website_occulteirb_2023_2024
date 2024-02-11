
<script lang="ts">
const videoURL: string = "https://www.youtube-nocookie.com/embed/sscYIVx4CgY?si=lgTuHIWq101MIrxt";

let isVideoShowed: boolean = false;

function toggleVideo() { isVideoShowed = !isVideoShowed; }
</script>

<!-- For the video -->
<div class="video-container" id="videoContainer" >
  <!-- Youtube video -->
  <iframe class={isVideoShowed ? '': 'hidden'} width="560" height="315" src="{ videoURL }" title="YouTube video player" allowfullscreen></iframe>
</div>

<!-- The button that permits to display the video -->
<div class="button-container" >
  <button on:click="{toggleVideo}">
    {#if (isVideoShowed) }
      Masquer la vidéo
    {:else}
      Regarder la vidéo
    {/if}
  </button>
</div>


<style lang="scss">
/* For the video */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  width: 100vw;

}

.video-container iframe {
  width: 100%;
  height: 100%;
  display: block;

  &.hidden {
    display: none;
  }
}

/* For the button */
.button-container {
  position: fixed;

  font-size: 2rem;

  bottom: 20px;
  right: 20px;
}

/* Style du bouton */
.button-container button {
  font-family: 'Protest Revolution', cursive;

  border: none;

  width: 11em;

  z-index: 1;

  background-color: black;
  color: red;

  cursor: pointer;

  font-size: 2rem;
  padding: .5em 0em; 
}
</style>
