
<script lang="ts">
import type { SocialLinkData } from "./socialLink";
import SocialLink from "./socialLink.svelte";

const socialLinks: SocialLinkData[] = [
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciAyIiBpZD0iTGF5ZXJfMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTMuNTUsMzcuNTYsNDEuNjksMjMuOGEuMTQuMTQsMCwwLDEsLjE1LjIzTDE5LjY2LDQyYTIuMDYsMi4wNiwwLDAsMC0uNzcsMS42djguODFhLjQxLjQxLDAsMCwwLC42MS4zNmw3Ljc1LTQuM2gwbDYuODUsNC44QS44My44MywwLDAsMCwzNS4zLDUzTDYwLDExLjA2YS4zMS4zMSwwLDAsMC0uMzctLjQ0TDQuNTQsMzFhLjgzLjgzLDAsMCwwLS4xOSwxLjQ1bDcuMTEsNUEyLjA2LDIuMDYsMCwwLDAsMTMuNTUsMzcuNTZaIi8+PC9nPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Telegram !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiA+Cgk8ZGVmcyA+CgkJPHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNFOEU2RTM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fS5jbHMtMntmaWxsOiNFOEU2RTM7fTwvc3R5bGU+Cgk8L2RlZnM+Cgk8dGl0bGUvPgoJPGcgZGF0YS1uYW1lPSJMYXllciA2IiBpZD0iTGF5ZXJfNiI+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAuNTQsNTFIMTcuMjJhNC42NCw0LjY0LDAsMCwxLTQuNjMtNC42MlYxNy4yOGE0LjY0LDQuNjQsMCwwLDEsNC42My00LjYzSDQ1LjgiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC40MywxNy4yOFY0Ni4zNkE0LjY0LDQuNjQsMCwwLDEsNDUuOCw1MWgtOSIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDgiIGN5PSIxMy45NSIgcj0iMSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwLjU0LDUxVjM4LjUxaC00LjRWMzIuNTdoNC40VjI2Ljg0YTYsNiwwLDAsMSw2LTZoNi4yM3Y1LjY1SDM4LjIxQTEuNDcsMS40NywwLDAsMCwzNi43NCwyOHY0LjU0aDZ2NmgtNlY1MSIvPgoJPC9nPgoJPHVzZSBocmVmPSIjZmFjZWJvb2stbG9nbyIvPgo8L3N2Zz4KCg==",
    ALT: "Rejoignez Notre Facebook !",
    text: ""
  },
  {
    URL: "/equipe",
    IMG: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHN0eWxlPSJkaXNwbGF5OiBibG9jazsiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojRThFNkUzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O30gLmNscy0ye2ZpbGw6I0U4RTZFMzt9PC9zdHlsZT4KCTwvZGVmcz4KCTx0aXRsZS8+Cgk8ZyBkYXRhLW5hbWU9IkxheWVyIDYiIGlkPSJMYXllcl82Ij4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC4zOSwxNy40NlY0Ni41NGE0LjY0LDQuNjQsMCwwLDEtNC42Miw0LjYzSDE3LjE4YTQuNjQsNC42NCwwLDAsMS00LjYyLTQuNjJWMTcuNDZhNC42NCw0LjY0LDAsMCwxLDQuNjItNC42M0g0NS43NyIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNTAuNDQiIGN5PSIxNC4xMyIgcj0iMSIvPgoJCTxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iMzkuMDMiIGN5PSIyNSIgcj0iMSIvPgoJCTxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIzLjc3LDIwLjMyYTMuNzUsMy43NSwwLDAsMC0zLjQ3LDMuNzRWMzkuOTRhMy43NywzLjc3LDAsMCwwLDMuNzYsMy43Nmg4LjU5Ii8+CgkJPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzIuNjUsNDMuN2g3LjI5YTMuNzcsMy43NywwLDAsMCwzLjc2LTMuNzZWMjQuMDZhMy43NywzLjc3LDAsMCwwLTMuNzYtMy43NkgyNC4wNmExLjM3LDEuMzcsMCwwLDAtLjI5LDAiLz4KCQk8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNCwyNi43NEE1LjY0LDUuNjQsMCwxLDAsMzcuNjQsMzIiLz4KCTwvZz4KCTx1c2UgaHJlZj0iI2luc3RhZ3JhbS1sb2dvIi8+Cjwvc3ZnPgoK",
    ALT: "Rejoignez Notre Instagram !",
    text: ""
  },
]

</script>

<div class="logo">
	<div class="container" >
		<div class="back"></div>
		<div class="bee"></div>
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
		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/logo_destineirb_abeille.png');
		background-size: cover;

		will-change: transform;
		animation: 1s ease-in-out 0s infinite alternate logo-translation;
	}

	.back {
		width: 100%;
		aspect-ratio: 1 / 1;

		background-image: url('/logo_destineirb_fond.png');
		background-size: cover;

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

	background: rgba($background, .61);
	backdrop-filter: blur(5px);

	border-top-left-radius: 1rem;

  bottom: 0;
  right: 0;

	padding: 2vw;

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


