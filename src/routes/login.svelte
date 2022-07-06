<script>
</script>

<svelte:head>
    <title>Login Page</title>

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

<section>
  <div class="top-container">
    <div class="login-container">
      <h3 class="display-4 secondary-header">Login to QuizMaster</h3>

      <div class="login-types-container">
        <div class="email-login-container">
          <input
            class="inputs form-control"
            type="email"
            placeholder="Your Email"
          />

          <input
            class="inputs form-control"
            type="password"
            placeholder="Your Password"
          />
          <a href="/quiz-create">
          <button class="btn btn-outline-success login-button">Login</button>
          </a>
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
</section>

<style>
  .top-container {
    width: 100%;
    height: 100vh;
    /* margin-top: 150px; */
    /* margin-left: 150px; */
    padding-top: 160px;
    padding-left: 100px;
    background-image: url("$lib/assets/background.jpg");
  }

  .secondary-header {
    font-weight: 400;
    font-family: Montserrat;
  }

  .login-container {
    /* margin-top: 50px; */
    text-align: center;
    display: inline-block;
  }

  .login-types-container {
    display: flex;
    justify-content: center;
    /* margin-top: 200px; */
  }

  .login-types-container > div {
    display: block;
    margin: 30px;
  }

  .email-login-container {
    width: 30%;
    height: 250px;
    width: 510px;
    padding: 10px;
    font-family: "Montserrat";
    text-align: center;
  }

  .inputs {
    margin: auto;
    margin-top: 20px;
    width: 300px;
    padding: 5px;
  }

  .login-button {
    margin-top: 20px;
    width: 300px;
    /* margin: auto; */
  }

  .guest-container {
    font-family: Montserrat;
    border: 2px solid green;
    width: 400px;
    border-radius: 10px;
    text-align: center;
    /* padding: 10px; */
  }

  .guest-login-header {
    background-color: green;
    color: white;
  }

  .guest-login-text {
    margin: auto;
    margin-top: 50px;
    width: 300px;
    padding: 5px;
  }

  .guest-button {
    margin: 30px;
    background-color: green;
    border-color: green;
  }

  .guest-button:hover {
    background-color: darkgreen;
    border-color: darkgreen;
  }
</style>
