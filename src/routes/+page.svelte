
<script lang="ts">
</script>

<div class="logo">
	<div class="container">
		<img src="/logo_destineirb_fond.png" alt="" class="back">
		<img src="/logo_destineirb_abeille.png" alt="" class="bee">
	</div>
</div>

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


.logo {
	width: 100vw;
	height: 100svh;

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		position: relative;
		width: 70svh;
		height: 70svh;
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
		background-color: $red;

		animation: 60s linear 0s infinite logo-rotation;
	}
	
}

div.texts {
  display: flex;
  
  justify-content: space-between;


  padding: 2em 5em;
}

p.text {
  margin: 0;
  max-width: 65ch;
}
</style>


