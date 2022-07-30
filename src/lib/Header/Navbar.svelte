<script lang="ts">
	import { base } from '$app/paths';
	import bars_src from '$lib/assets/svgs/bars.svg';
	import close_src from '$lib/assets/svgs/xmark.svg';
	import { goto } from '$app/navigation';
	import { getAuth, signOut } from 'firebase/auth';

	let mobileMenu: HTMLElement;
	function closeMenu() {
		let menuChildren = mobileMenu.childNodes;
		for (let i = 0; i < menuChildren.length; i++) {
			let child = menuChildren[i] as HTMLElement;
			if (child.nodeName == 'A') {
				child.style.display = 'none';
			} else if (child.nodeName == 'UL') {
				child.style.marginLeft = '-100vw';
			}
		}
		mobileMenu.style.display = 'none';
	}
	function openMenu() {
		mobileMenu.style.display = 'block';
		let menuChildren = mobileMenu.childNodes;
		for (let i = 0; i < menuChildren.length; i++) {
			let child = menuChildren[i] as HTMLElement;
			if (child.nodeName == 'A') {
				child.style.display = 'block';
			} else if (child.nodeName == 'UL') {
				child.style.marginLeft = '0vw';
			}
		}
	}

	const auth = getAuth();
	function logout() {
		signOut(auth)
			.then(() => {
				localStorage.removeItem('uid');
				localStorage.removeItem('gameID');
				return {
					status: 302,
					redirect: '{base}/login'
				};
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />

	<link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
</svelte:head>

<section class="header">
	<div class="navbar">
		<a class="navbar-brand" href="{base}"> QuizMaster </a>
		<ul class="navIcons">
			<li class="nav-item active">
				<a class="nav-link" aria-current="page" href="{base}">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/contact">Contact</a>
			</li>

			<li class="nav-item loginItem">
				<a id="login-button" class="nav-link" on:click={logout} href="{base}/login">Login</a>
			</li>

			<li class="nav-item joinItem">
				<a class="nav-link" href="{base}/joinus">Join us</a>
			</li>
		</ul>

		<!-- Mobile Navigation -->
		<img src={bars_src} alt="menu" class="menuIcon" on:click={openMenu} />
	</div>

	<div class="mobile-menu" bind:this={mobileMenu}>
		<a class="navbar-brand" href="{base}"> QuizMaster </a>
		<div class="close" on:click={closeMenu}>
			<img src={close_src} alt="close" class="closeIcon" />
		</div>
		<ul class="m-navIcons">
			<li class="nav-item">
				<a class="nav-link" aria-current="page" href="{base}">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{base}/contact">Contact</a>
			</li>
			<li class="nav-item loginItem">
				<a id="login-button" class="nav-link" on:click|preventDefault={logout} href="{base}/login">Login</a>
			</li>
			<li class="nav-item joinItem">
				<a class="nav-link" href="{base}/joinus">Join us</a>
			</li>
		</ul>
	</div>
</section>

<style lang="scss">
	@mixin navbar-brand {
		font-size: 1.5em;
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.8);
	}
	.navbar {
		background-color: #fff;
		position: sticky;
		top: 0;
		padding: 10px 0px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		z-index: 1;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		.navbar-brand {
			@include navbar-brand;
		}
		.navIcons {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			margin: 0px;
			.nav-item {
				display: inline;
				position: relative;
				a {
					font-size: 15px;
					font-family: 'Montserrat', sans-serif;
					font-weight: 100;
					color: rgba(0, 0, 0, 0.616);
					margin: 0px;
				}
				&::after {
					content: '';
					display: block;
					margin: -5px auto;
					position: absolute;
					left: 15px;
					width: 0px;
					height: 2px;
					background-color: rgb(20, 161, 117);
					transition: width 0.3s ease-in-out;
				}
				&:hover::after {
					width: calc(100% - 2rem);
				}
			}
			.loginItem {
				.nav-link {
					color: rgb(20, 161, 117);
				}
			}
			.joinItem {
				.nav-link {
					color: rgb(255, 255, 255);
					background-color: rgb(20, 161, 117);
					border-radius: 5px;
				}
			}
		}
		// Mobile Navigation
		.menuIcon {
			height: 25px;
			display: none;
			margin: 0px;
			cursor: pointer;
			opacity: 0.8;
		}
	}
	.mobile-menu {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0px;
		z-index: 5;
		background-color: rgba(20, 161, 116, 0);
		display: none;
		.navbar-brand {
			position: fixed;
			@include navbar-brand;
			top: 23px;
			left: 4vw;
		}
		ul {
			list-style: none;
			padding: 0px 15vw;
			margin: 0px;
			height: 100vh;
			width: fit-content;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: left;
			background-color: rgb(20, 161, 116);
			z-index: 20;
			a {
				text-decoration: none;
				color: white;
				font-size: 1.25rem;
				transition: border 0.1s ease-in-out;
				margin: 10px 20px;
				cursor: pointer;
				&:hover {
					border-left: 4px solid rgba(255, 255, 255, 0.8);
				}
			}
		}
		.joinItem {
			background-color: #fff;
			height: 52px;
			width: 130px;
			text-align: center;
			border-radius: 15px;
			a {
				color: rgb(20, 161, 116);
				padding: 0px;
				background-color: transparent;
				&:hover {
					border-left: 0px solid rgba(255, 255, 255, 0.8);
				}
			}
		}
		.close {
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 25px;
			left: 38vw;
			cursor: pointer;
			.closeIcon {
				width: 40px;
				height: 40px;
				filter: invert(100%);
			}
		}
	}
	@media screen and (max-width: 1100px) {
		.navbar {
			.navIcons {
				display: none;
			}
			.menuIcon {
				display: block;
			}
		}
	}
	@media screen and (max-width: 600px) {
		.close {
			left: 50vw !important;
		}
	}
</style>
