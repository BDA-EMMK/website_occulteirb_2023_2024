
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
		<button on:click={toggleDetails} class="toggle-details">
			<svg class="button-content" enable-background="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#E8E6E3" fill-rule="evenodd" id="Chevron_Right"/><g/><g/><g/><g/><g/><g/></svg>
		
			<!-- <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjY5OCwxNS4yODZsLTkuMDAyLTguOTk5ICBjLTAuMzk1LTAuMzk0LTEuMDM1LTAuMzk0LTEuNDMxLDBjLTAuMzk1LDAuMzk0LTAuMzk1LDEuMDM0LDAsMS40MjhMMTkuNTUzLDE2bC04LjI4Nyw4LjI4NWMtMC4zOTUsMC4zOTQtMC4zOTUsMS4wMzQsMCwxLjQyOSAgYzAuMzk1LDAuMzk0LDEuMDM2LDAuMzk0LDEuNDMxLDBsOS4wMDItOC45OTlDMjIuMDg4LDE2LjMyNSwyMi4wODgsMTUuNjc1LDIxLjY5OCwxNS4yODZ6IiBmaWxsPSIjMTIxMzEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJDaGV2cm9uX1JpZ2h0Ii8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+" alt=""> -->
		</button>

		<div class="details-content">
			<p>{ allo.requestText}</p>
		</div>
  </div>

</div>


<style lang="scss">
@import '$lib/theme.scss';

@media screen and (max-width: 899px) {
.allo-card {
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: $background;

  max-width: 90vw;

  padding: 5em;
  padding: 10vw;

	border-radius: .4rem;

  font-family: 'fanwood-master', serif;

  .title, p { margin: 0; }

  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
		font-family: 'murmure', sans-serif;
  }
}

.details {
	display: flex;
	justify-content: space-between;
	padding-top: 2rem;

  .toggle-details {
    border: 0;
    margin: 0;
    padding: .5rem;

    cursor: pointer;

		color: $foreground;
    background-color: transparent;

		.button-content {
			transform: rotate(0deg);
			transition: transform ease-in-out .3s;
		}
  }

  .details-content {
		max-height: 0rem;
    overflow: hidden;
		width: 25ch;

    transition: max-height .4s;
  }

	&.showdetails {
		.details-content {
			max-height: 1.3rem;
		}

		.toggle-details .button-content {
			transform: rotate(90deg);
		}
	}
}
}

@media screen and (min-width: 899px) {
.details {
	display: flex;
	justify-content: space-between;

  .toggle-details {
    border: 0;
    margin: 0;
    padding: .5rem;

    cursor: pointer;

		color: $foreground;
    background-color: transparent;

		.button-content {
			transform: rotate(0deg);
			transition: transform ease-in-out .3s;
		}
  }

  .details-content {
		max-height: 0rem;
    overflow: hidden;

    transition: max-height .4s;
  }

	&.showdetails {
		.details-content {
			max-height: 1.3rem;
		}

		.toggle-details .button-content {
			transform: rotate(90deg);
		}
	}
}

.allo-card {
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: $background;

  max-width: 90vw;

  padding: 5em;
  padding: 10vw;

  font-family: 'fanwood-master', serif;

  .title, p { margin: 0; }

  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
		font-family: 'murmure', sans-serif;
  }

}

.details {
	display: flex;
	justify-content: space-between;

  .toggle-details {
    border: 0;
    margin: 0;
    padding: .5rem;

    cursor: pointer;

		color: $foreground;
    background-color: transparent;

		.button-content {
			transform: rotate(0deg);
			transition: transform ease-in-out .3s;
		}
  }

  .details-content {
		max-height: 0rem;
    overflow: hidden;

    transition: max-height .4s;
  }

	&.showdetails {
		.details-content {
			max-height: 1.3rem;
		}

		.toggle-details .button-content {
			transform: rotate(90deg);
		}
	}
}
}

</style>
