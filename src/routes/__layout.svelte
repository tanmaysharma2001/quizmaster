<script lang="ts">
	import Navbar from '$lib/Header/Navbar.svelte';
	import Footer from '$lib/Footer/footer.svelte';
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const firebaseConfig = {
		apiKey: 'AIzaSyCU9srkKV3Mf52D6wmLtuuaNE_xRgJVKFA',
		authDomain: 'quizmaster-2.firebaseapp.com',
		projectId: 'quizmaster-2',
		storageBucket: 'quizmaster-2.appspot.com',
		messagingSenderId: '1073865854546',
		appId: '1:1073865854546:web:73df54aed493b0678dd98b'
	};
	const app = initializeApp(firebaseConfig);

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('Welcome to QuizMaster!');
				// isLoggedIn.update(() => true);
			} else {
				// isLoggedIn.update(() => false);
				return {
					status: 302,
					redirect: '{base}'
				};
			}
		});
	});
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
		background-color: #fff;
	}
</style>
