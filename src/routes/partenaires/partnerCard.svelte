<script lang="ts">
import type { Partner } from "./partner";

export let partner: Partner = {
  name: "unset",
  imgURL: "/unset",
  desc: "unset",
	link: '/',
};

</script>

<!-- Member 1 -->
<a href="{partner.link}" target="_blank">
	<div class="partner-card">
		<div class="top-part">
			<h3 class="title">{ partner.name }</h3>
			<img src="{ partner.imgURL }" alt="{ partner.name }" title="{ partner.name }">
		</div>

		<p class="desc">
		  { partner.desc}
		</p>
	</div>
</a>

<style lang="scss">
@import "$lib/theme.scss";

@keyframes animate{
	from {
		transform: rotate(0deg);
	}
	to {

		transform: rotate(362deg);
	}
}
a { text-decoration: none; }

.partner-card {
  object-fit: cover;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
	position: relative;
	width: 20rem;
	max-width: 90vw;

	background-color: $orange;
	border-radius: .2rem;

	.top-part {
		position: relative;
		width: 100%;
		height: 15rem;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 100%;
			max-width: 100%;
		}

		.title {
			position: absolute;
			left: 0;
			bottom: -3.25rem;

			padding: 1rem;
			width: 100%;

			font-size: 2.5rem;
			color: $background;

			background-color: rgba($foreground, .75);
		}
	}

	.desc {
		padding: 6rem 2rem 3rem 2rem;
		font-size: 1.5rem;
		font-family: "fanwood-master", serif;
		color: $background;
	}

  /*
   * UI effects !
  */
  &:hover {
    transform: scale(1.05);
  }
}
</style>
