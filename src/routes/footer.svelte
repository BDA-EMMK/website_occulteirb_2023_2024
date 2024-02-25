
<script lang="ts">
import type { HeaderNavData } from './headerNav';

const headerNavDatas: HeaderNavData[] = [
  {
    URL: '/',
    text: 'Accueil'
  },
  {
    URL: '/equipe/',
    text: 'Équipe'
  },
  {
    URL: '/allo/',
    text: 'Allos'
  },
  {
    URL: '/video/',
    text: 'Vidéo'
  },
  {
    URL: '/jeu/',
    text: 'Jeu'
  },
  {
    URL: '/partenaires/',
    text: 'Partenaires'
  },
];
</script>

<footer>
  <h3>Destin'eirb</h3>

	<ul class="footer-links">
		{#each headerNavDatas as headerNavData}
			<li class="footer-link">
				<a href="{ headerNavData.URL }">
					{ headerNavData.text }
				</a>
			</li>
		{/each}
	</ul>

	<p class="text copyright">
		&copy; Destin'eirb &mdash; All rights reserved.
	</p>
</footer>

<style lang="scss">
@import "$lib/theme.scss";

footer {
	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding: 5rem 2rem;

  position: relative;

  h3 {
    margin: 0;
    padding: 0;

		font-size: 4rem;

    background-color: inherit;
  }

  background-color: $darker-background;
  color: $foreground;
}

.footer-links {
	display: flex;
	flex-direction: column;

	align-items: flex-end;

	font-size: 3rem;
}

.copyright {
	text-align: center;
}
</style>

