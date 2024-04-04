<script lang="ts">
import Auth from '$lib/auth';

export let action: 'login' | 'logout' = 'login';

export let onLogin = () => {};
export let onLogout = () => {};

function makeAction() {
	if (action === 'logout') {
		Auth.logout();
		onLogout();
	}
	
	else {
		Auth.login()
		onLogin();
	}
}
</script>

<button class="login-button" on:click="{ makeAction }">
	{#if action === 'logout'}
		Se déconnecter
	{:else}
		Se connecter
	{/if}
</button>

<style lang="scss">
@import '$lib/theme.scss';

.login-button {
	font-family: Murmure, serif;
	font-size: 3rem;
	letter-spacing: .1rem;
	padding: 1rem 3rem;
	border-radius: .2rem;

	color: $background;
	background-color: $foreground;
	border: 0;
	cursor: pointer;
	transition: color .2s ease-in-out, background-color .2s ease-in-out;

	&:hover {
		background-color: $darker-background;
		color: $foreground;
	}
}
</style>
