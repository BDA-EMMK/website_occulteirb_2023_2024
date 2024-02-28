
<script lang="ts">
import type { Allo } from "./allo";

export let allo: Allo = {
  UID: "-1",
  CAS_UID: "not set",
  title: "not set",
  state: "In Progress",
  creationDate: "not set",
  finishDate: "not set",
  requestText: "not set"
};

let showdetails: boolean = false;

function toggleDetails() { showdetails = !showdetails; }
</script>

<div class="allo-card">
  <h3 class="title">
    { allo.title }
  </h3>

  <p class="state text">
    Status : { allo.state }
  </p>

  <p>
    Request date : { allo.creationDate }
  </p>

  <div class="details" class:showdetails>
    <p>{ allo.requestText}</p>
  </div>

  <button on:click={toggleDetails} class="toggle-details">
    {#if showdetails}
      Hide details
    {:else}
      Show details
    {/if}
  </button>
</div>


<style lang="scss">
@import '$lib/theme.scss';

.allo-card {
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: $red;

  max-width: 90vw;

  padding: 5em;
  gap: 1em;

  .title, p { margin: 0; }

  .title {
    font-size: 2em;
    padding-bottom: 1em;
  }

  .toggle-details {
    position: absolute;

    right: 1vw;
    top: 1vw;

    border: 0;
    margin: 0;
    padding: .5em;

    cursor: pointer;

    background-color: transparent;
  }

  .details {
		transform: scaleY(0);
		height: 5rem;
    overflow: hidden;

    transition: transform .3s;

    &.showdetails {
			transform: scaleY(1);
    }
  }
}


@media screen and (max-width: 899px) {
.allo-card {
  padding: 10vw;
}

}
</style>
