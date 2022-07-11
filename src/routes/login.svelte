<script lang="ts">
  import { base } from "$app/paths";
  import { menuActiveItem } from "$lib/scripts/menu.js";
  import { onMount } from "svelte";

  import { goto } from "$app/navigation";

  import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";

  var email: string;
  var password: string;

  onMount(() => {
    let menuItems = document.getElementsByClassName(
      "nav-item"
    ) as unknown as HTMLElement[];
    let activeMenuItem = document.title.replace("QuizMaster | ", "");
    menuActiveItem(menuItems, activeMenuItem);
  });

  function login(a: string) {
    var auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("changed!");
      if (user) {
        goto("/quiz-create");
      }
    });
    if (a == "login") {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          try {
            const user = userCredential.user;
            localStorage.setItem("uid", user.uid);
            goto("/quiz-create");
          } catch (e) {
            console.log(e);
          }
        }
      );
    } else {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("uid", user.uid);
          goto("/quiz-create");
        }
      );
    }
  }
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
<div class="top-container">
  <div class="login-container">
    <h3 class="display-4 secondary-header">Login to QuizMaster</h3>

    <div class="login-types-container">
      <div class="email-login-container">
        <input
          bind:value={email}
          id="email"
          class="inputs form-control"
          type="email"
          placeholder="Your Email"
        />

        <input
          bind:value={password}
          id="password"
          class="inputs form-control"
          type="password"
          placeholder="Your Password"
        />
        <!-- <img
            on:click|preventDefault={loginWithGoogle}
            src="signin.png"
            alt="Login with google"
            height="50px"
          /> -->
        <!-- <a href="/quiz-create"> -->
        <button
          on:click|preventDefault={() => login("login")}
          class="btn btn-outline-success login-button">Login</button
        >
        <button
          on:click|preventDefault={() => login("register")}
          class="btn btn-outline-success login-button">Register</button
        >
        <!-- </a> -->
      </div>

      <div class="guest-container">
        <h3 class="guest-login-header">Login as Guest</h3>

        <input
          class="form-control guest-login-text"
          type="text"
          placeholder="Enter Game ID"
        />

        <button class="btn btn-primary guest-button">Play as Guest</button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
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
