
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
</script>

<div class="allo-card">
  <h3 class="title">
    { allo.title }
  </h3>

  <p class="state text">
    Status: { allo.state }
  </p>


  <div class="details" class:showdetails>
    <p>{ allo.requestText}</p>
  </div>
</div>


<style lang="scss">
/* @import '$lib/theme.scss'; */

.allo-card {
  display: flex;
  flex-direction: column;


  .title {
    font-size: 2em;
  }

  .details {
    max-height: 0;

    .showdetails {
      max-height: auto;
    }
  }
}
</style>
