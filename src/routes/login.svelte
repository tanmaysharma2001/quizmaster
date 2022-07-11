<script lang="ts">
  import { base } from '$app/paths'
  import { menuActiveItem } from '$lib/scripts/menu.js'
	import { onMount } from 'svelte';

	onMount(() => {
		let menuItems = document.getElementsByClassName("nav-item") as unknown as HTMLElement[];
		let activeMenuItem = (document.title).replace("QuizMaster | ", "");
		menuActiveItem(menuItems, activeMenuItem);
	});
</script>

<svelte:head>
  <title>QuizMaster | Login</title>

  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<section class="login">
  <div class="d1"></div>
  <div class="d2"></div>
  <form>
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
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Password"
      />
    </div>
    <!-- Forget your password-->
    <div class="form-group">
    <p class="forgetPass"> Forgot password? <a href="{base}/forgot-password" class="reset"> Rest your password! </a> </p>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</section>

<style lang="scss">
  .login{
    width: 100vw;
    min-height: calc(100vh - 66px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    font-size: 18px;
    background-color: rgba(245, 245, 245, 0.712);
    .d1{
      width: 500px;
      height: 500px;
      background-color: #d8d8d831;
      position: fixed;
      top: -166px;
      right: -166px;
      transform: rotate(45deg);
    }
    .d2{
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
    form{
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 2;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

      label{
        font-weight: bold;
      }
      .forgetPass{
        font-family: Montserrat, sans-serif;
        font-size: 16px;
        margin-top: 5px;
        opacity: 0.7;
        .reset{
          color: rgb(20, 161, 117);
        }
      }
    }
  }
</style>
