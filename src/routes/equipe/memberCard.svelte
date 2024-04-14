
<script lang="ts">
import type { Member } from "./member";

export let member: Member = {
  name: "unset",
  major: "unset",
  img1URL: "/unset",
  img2URL: "/unset",
  img3URL: "/unset",
  aka: "unset",
  role: "unset",
};
</script>

<div class="team-member" tabindex="-1" >
  <div class="face face3">
    <div class="member-details">
      <p class="name" >{ member.aka }</p>
    </div>

    <img src="{ member.img2URL }" alt="photo - { member.aka }" title="{ member.name }" id="image">
  </div>

  <div class="face face2">
    <div class="member-details">
      <p class="name" >{ member.role }</p>
    </div>

    <img src="{ member.img3URL }" alt="photo - { member.aka }" title="{ member.name }" id="image">
  </div>

  <div class="face face1">
    <img src="{ member.img1URL }" alt="photo - { member.name }" title="{ member.name }" id="image">

    <div class="member-details">
      <p class="name" >{ member.name }</p>
      <p class="major" >{ member.major }</p>
    </div>
  </div>
</div>


<style lang="scss">
@import '$lib/theme.scss';

.team-member {
  position: relative;
	transition: z-index .2s ease-in-out;
	box-sizing: border-box;

  width: 22rem;
	max-width: 70vw;
  /* min-height: 30em; */

  aspect-ratio: 1 / 1;

  text-align: center;
}

.team-member img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
}


.face {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

	padding: 1rem;
	box-sizing: border-box;

	border-radius: .3rem;

	background-color: $foreground;
	color: $background;

	display: flex;
	flex-direction: column;

	.member-details {
		padding: 1rem;
	}

  /* background-color: rgba(255, 255, 255, 0.8) */;

  p {
    margin: 0;
    font-size: 1.3rem;
    text-align: center;

    &.name {
      font-weight: bold;
    }
  }

  &.face1 {
    filter: opacity(1);
    transform: translate(0);
		transition: transform .2s;
  }

	&.face2, &.face3 {
		pointer-events: none;
		background-color: $foreground;
		color: $background;
		scale: 1;

		transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
	}

  &.face2 {
    filter: opacity(0);
    transform: rotate(40deg) translate(20%, 0%);
  }

  &.face3 {
    filter: opacity(0);
    transform: rotate(-20deg);
  }
}


/*
 * Mobile media query
*/
@media screen and (max-width: 899px) {
.team-member:hover, .team-member:focus {
	z-index: 5;

  .face1 {
		transform: scale(.9) translateY(3rem) rotate(5deg);
  }

  .face2 {
    z-index: 2;
    filter: opacity(1);
    transform: rotate(15deg) translate(20%, -40%);
  }

  .face3 {
    z-index: 2
    filter: opacity(1);
    transform: rotate(-15deg) translate(-20%, -40%);
		pointer-events: none;
  }
}
}

/*
 * Desktop media query
*/
@media screen and (min-width: 900px) {
.team-member:hover, .team-member:focus {
	z-index: 5;

  .face1 {
		transform: scale(.9);
  }

  .face2 {
    z-index: 2;
    filter: opacity(1);
    transform: rotate(55deg) translate(20%, -60%);
  }

  .face3 {
    z-index: 2;
    filter: opacity(1);
    transform: rotate(-30deg) translate(-20%, -60%);
		pointer-events: none;
  }
}
}
</style>
