
<script lang="ts">
import type { Partner } from "./+page.svelte";

export let partner: Partner = {
  name: "unset",
  imgURL: "/unset",
  desc: "unset",
};

</script>

<!-- Member 1 -->
<div class="partner-card">
  <img src="{ partner.imgURL }" alt="{ partner.name }" title="{ partner.name }">

  <!-- <p class="partner-card__name"> -->
  <!--   { partner.name } -->
  <!-- </p> -->
  <!-- <p> -->
  <!--   { partner.desc} -->
  <!-- </p> -->

</div>


<style lang="scss">
@keyframes animate{
	from {
		transform: rotate(0deg);
	}
	to {

		transform: rotate(362deg);
	}
}


.partner-card {
  width: 250px;
  height: 400px;
  margin: auto;
  text-align: center;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-150px);

  &::before {
    content: '';
    position: absolute;

    z-index: -1;

    width: 150px;
    height: 500px;

    background: rgba(255, 73, 1, 1);
    transform: rotate(45deg);
  }

  &::after {
    z-index: -1;
    position: absolute;
    content: '';
    inset: 4px;
    border-radius: 8px;
  }

  img {
    width: 96%;
    height: 96%;

    object-fit: cover;
    border-radius: 6px;

    transform: translateY(9px);
  }

  /*
   * UI effects !
  */
  &:hover {
    transform: scale(1.05);
  }

  &:hover::before {
    animation: animate 2s linear infinite;
  }
}
</style>
