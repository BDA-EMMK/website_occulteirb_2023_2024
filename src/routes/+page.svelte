
<script lang="ts">
import type { SocialLinkData } from "./socialLink";
import SocialLink from "./socialLink.svelte";

const socialLinks: SocialLinkData[] = [
  {
    URL: "/equipe",
    IMG: "/img/logos/telegram_logo_white.png",
    ALT: "Rejoignez Notre Telegram !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "/img/logos/facebook_logo_white.png",
    ALT: "Rejoignez Notre Facebook !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "/img/logos/instagram_logo_white.png",
    ALT: "Rejoignez Notre Instagram !",
    text: ""
  },
]

</script>

<div class="logo">
	<div class="container">
		<img src="/logo_destineirb_fond.png" alt="" class="back">
		<img src="/logo_destineirb_abeille.png" alt="" class="bee">
	</div>
</div>

<div class="social-links">
  <ul>
    {#each socialLinks as socialLink}
      <li>
        <SocialLink socialLinkData="{ socialLink }" />
      </li>
    {/each}
  </ul>
</div>

<div class="brasse">
<h2>Time for the brasse !</h2>

<div class="brasse-items">
  <div class="texts">
    <p class="text">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

    <p class="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic delectus accusamus vero quos ea non. Velit, ex ipsam beatae enim nulla libero incidunt autem veritatis, dicta voluptate dolorum fuga reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla, non ipsam minima odio tempora iure quidem. Nostrum pariatur perferendis illum! Distinctio sed delectus perferendis nulla minus culpa mollitia velit!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor tempore cum beatae iste voluptatum modi velit quam natus eos quasi voluptate saepe consequuntur, iure necessitatibus! Qui nihil dolores iste.
    </p>
  </div>

  <div class="texts">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam itaque porro tempore! Tenetur eligendi temporibus nulla iure similique dolorum velit, atque rem sed, officiis corporis reiciendis, aperiam rerum quas quis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati. Odio sint laudantium iusto. Ratione fuga cumque maxime, odit veritatis voluptates. Quae excepturi consequatur animi ipsam! Cumque suscipit reprehenderit autem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio saepe, culpa commodi consectetur odio voluptate vero, magni expedita recusandae sequi necessitatibus laborum itaque eligendi. Nisi provident laudantium quibusdam officia.
    </p>

    <div class="img"></div>
  </div>
</div>

</div>

<style lang="scss">
@import '$lib/theme.scss';

@keyframes logo-rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes logo-translation {
	from {
		transform: translateY(-1em);
	}
	to {
		transform: translateY(-1.5em);
	}
}

@media screen and (max-width: 899px) {
div.texts {
  display: flex;
	flex-direction: column;

	gap: 3em;
  padding: 2em 10vw;
}

p.text {
  margin: 0;
  max-width: 60ch;
}
}



.logo {
	width: 100%;
	height: 100svh;

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		position: relative;
		width: 70svh;
		height: 70svh;

    max-width: 90vw;
    max-height: 90vw;

    overflow: hidden;  /* Prevent overflow-x issue on rotation on index.html */
	}

	.bee {
		position: relative;
		height: 100%;
		width: 100%;

		animation: 1s ease-in-out 0s infinite alternate logo-translation;
	}

	.back {
		width: 100%;
		height: 100%;

		position: absolute;
		left: 0;
		top: 0;

		border-radius: 100%;
		background-color: $logo-red;

		animation: 60s linear 0s infinite logo-rotation;
	}
	
}

div.texts {
  display: flex;
  
  justify-content: space-between;

  padding: 2em 10vw;
}

p.text {
  margin: 0;
  max-width: 60ch;
}

.social-links {
  position: fixed;

  bottom: 2vw;
  left: 2vw;

  z-index: 1;

  ul {
    margin: 0;
    padding: 0;

    display: flex;
    gap: .5em;

    position: relative;

    li {
      list-style: none;
    }
  }
}
</style>


