<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { menuActiveItem } from '$lib/scripts/menu.js';
	import { onMount } from 'svelte';
	import lottieSrc from '$lib/assets/lottie/lottie-message.json?url';
	onMount(() => {
		let menuItems = document.getElementsByClassName('nav-item') as unknown as HTMLElement[];
		let activeMenuItem = document.title.replace('QuizMaster | ', '');
		menuActiveItem(menuItems, activeMenuItem);
	});
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Page" />
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
		rel="stylesheet"
	/>
	<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>
<section class="contact">
	<div class="d1" />
	<div class="d2" />
	<div class="container">
		<div class="row">
			<div class="col-md-6 lottie">
				<lottie-player src={lottieSrc} loop nocontrols autoplay />
			</div>
			<div class="col-md-6">
				<form>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" placeholder="Enter name" />
					</div>
					<div class="form-group">
						<label for="email">Email address</label>
						<input
							type="email"
							class="form-control"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" class="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div class="form-group">
						<label for="message">Message</label>
						<textarea class="form-control" id="message" rows="3" placeholder="Enter message" />
					</div>
					<button type="submit" class="btn btn-primary"> Submit </button>
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.contact {
		background-color: rgba(245, 245, 245, 0.712);
		padding: 50px 0;
		width: 100vw;
		min-height: calc(100vh - 66px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
			margin: 0px;
			position: relative;
			background-color: white;
			padding: 20px;
			z-index: 2;
			line-height: 40px;
			label {
				font-weight: bold;
			}
			textarea {
				height: 150px;
				margin-bottom: 20px;
			}
		}
		.lottie {
			background-color: #14a175;
			margin: 0px;
		}
		.col-md-6 {
			margin: 0px !important;
			padding: 0px !important;
		}
	}
</style>
