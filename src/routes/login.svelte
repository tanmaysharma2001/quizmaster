<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
	import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

	const provider = new GoogleAuthProvider();

	let email: string;
	let password: string;

	const auth = getAuth();

	function login(a: string) {
		var auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			console.log('changed!');
			if (user) {
				const uid = user.uid;
			} else {
				var loginEle = document.getElementById('login-button');
				loginEle.innerHTML = 'Login';
				$: if (browser) {
					goto('/login');
				}
			}
		});
		if (a == 'login') {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					localStorage.setItem('uid', user.uid);
					alert('Signin Successfully. User id: ' + user.uid);
					goto('/quiz-create');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorCode + ' ' + errorMessage);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					localStorage.setItem('uid', user.uid);
					alert('User added successfully!');
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					alert(errorCode + ' ' + errorMessage);
				});
		}
	}
</script>

<svelte:head>
	<title>QuizMaster | Login</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<section class="login">
	<div class="d1" />
	<div class="d2" />
	<form>
		<div class="form-group">
			<label for="email">Email address</label>
			<input bind:value={email} type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
			<small id="emailHelp" class="form-text text-muted"> We'll never share your email with anyone else. </small>
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" class="form-control" id="password" placeholder="Password" bind:value={password} />
		</div>
		<!-- Forget your password-->
		<div class="form-group">
			<p class="forgetPass">
				Forgot password? <a href="{base}/forgot-password" class="reset"> Rest your password! </a>
			</p>
		</div>
		<button type="submit" class="btn btn-primary" on:click|preventDefault={() => login('login')}> Login </button>
	</form>
</section>

<style lang="scss">
	#login-google-img {
		height: 45px;
		width: 180px;
		cursor: pointer;
		margin-left: 90px;
	}

	.login {
		width: 100vw;
		min-height: calc(100vh - 66px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		line-height: 40px;
		font-size: 18px;
		background-color: rgba(245, 245, 245, 0.712);
		.d1 {
			width: 500px;
			height: 500px;
			background-color: #d8d8d831;
			position: fixed;
			top: -166px;
			right: -166px;
			transform: rotate(45deg);
		}
		.d2 {
			width: 800px;
			height: 800px;
			background-color: #d8d8d831;
			position: fixed;
			bottom: -200px;
			left: -200px;
			z-index: 0;
			border-radius: 50%;
			transform: rotate(-45deg);
		}
		form {
			border: 1px solid rgba(0, 0, 0, 0.1);
			background-color: white;
			padding: 20px;
			border-radius: 5px;
			z-index: 2;
			box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

			label {
				font-weight: bold;
			}
			.forgetPass {
				font-family: Montserrat, sans-serif;
				font-size: 16px;
				margin-top: 5px;
				opacity: 0.7;
				.reset {
					color: rgb(20, 161, 117);
				}
			}
		}
	}
</style>
