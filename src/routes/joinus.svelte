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
  <title>QuizMaster | Join Us</title>

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
<section class="signin">
    <div class="d1"></div>
    <div class="d2"></div>
    <form>
        <div class="form-group">
            <label for="email">Name</label>
            <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="First name"
            />
            <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Last name"
            />
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
            />
        </div>
        <div class="form-group">
          <label for="birth">Date of birth</label>
          <input
              type="date"
              class="form-control"
              id="birth"
              placeholder="Date of birth"
          />
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
        <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
            />
        </div>
        <div class="form-group">
          <label for="repassword">Confirm password</label>
          <input
              type="password"
              class="form-control"
              id="repassword"
              placeholder="Rewrite your password"
          />
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <a class="form-check-label" for="exampleCheck1" href="{base}/agreement">I read the privacy agreement!</a>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </section>

<style lang="scss">
  .signin{
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
      position: relative;
      z-index: 1;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 2;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

      label{
        font-weight: bold;
      }
      input{
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
      }
      .form-check{
        font-family: Montserrat, sans-serif;
        font-size: 16px;
        margin-top: 0px;
        opacity: 0.7;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        a{
          text-decoration: none;
          color: rgb(20, 161, 117);
        }
      }
    }
  }
</style>