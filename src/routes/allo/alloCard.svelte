
<script lang="ts">
import type { Allo } from "$lib/api";

export let allo: Allo = {
  address: "string", 
  city: "string",
  phone: "string",
  name: "string",
  casId: "string",
  requestText: "string",
  state: "string",
  allos: [],
};

let showdetails: boolean = false;
</script>

<div class="allo-card">
  <h3 class="title">
    Old title
  </h3>

  <p class="state text">
    Status : { allo.state }
  </p>

  <p class="creation">
    Request date : { allo.creationDate }
  </p>

  <div class="details" class:showdetails>
		<div class="details-content">
			<p>{ allo.requestText }</p>
		</div>
  </div>

</div>


<style lang="scss">
@import '$lib/theme.scss';

.allo-card {
  display: flex;
  flex-direction: column;
  position: relative;

	gap: 1rem;

	width: 15rem;

	border-radius: .2rem;

  .title {
    font-size: 3rem;
    padding-bottom: 1rem;
		font-family: 'murmure', sans-serif;
  }

	.details, .creation {
		font-size: 1.5rem;
	}

}

/*
	Mobile style
*/
@media screen and (max-width: 899px) {
.allo-card {
  background-color: $background;
  max-width: 90vw;

  padding: 5em;
  padding: 10vw;

	border-radius: .4rem;

  font-family: 'fanwood-master', serif;

  .title, p { margin: 0; }

  .title {
    padding-bottom: 1rem;
		font-family: 'murmure', sans-serif;
  }
}

}


/*
	Desktop style
*/
@media screen and (min-width: 899px) {

.allo-card {
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 90vw;

  background-color: $background;
  padding: 5rem 3rem;

  font-family: 'fanwood-master', serif;

  .title, p { margin: 0; }

  .title {
    padding-bottom: 1rem;
		font-family: 'murmure', sans-serif;
  }

}
}

</style>
