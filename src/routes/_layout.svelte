<script>
	import { stores } from '@sapper/app';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import Nav from '../components/Nav.svelte';
	import {COOKIE_TOKEN, TOKEN_REFRESH_TIME} from "../utils/constants";
	import {forceTokenRefresh} from "../utils/firebase";

	export let segment;

	const { session } = stores();

	onMount(async () => {
		firebase.auth().onIdTokenChanged(async function(user) {

			if (!user) {
				$session.user = false;
				Cookies.set(COOKIE_TOKEN, false);
				return;
			}

			const token = await user.getIdToken();

			$session.user = token;

			Cookies.set(COOKIE_TOKEN, token);

			window.timeoutId = setTimeout(() => {
				forceTokenRefresh();
			}, TOKEN_REFRESH_TIME)
		});
	})

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 60px;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
