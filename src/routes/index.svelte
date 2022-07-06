<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import logo from "$lib/assets/background.jpg";
</script>

<svelte:head>
  <title>Welcome to the QuizMaster</title>
  <meta name="description" content="Svelte demo app" />

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

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<section>
  <div class="top-container">
    <div class="intro-container">
      <h1 class="intro-heading">
        Welcome to the Quiz<span id="intro-heading-master-span">Master</span>
      </h1>
      <p class="intro-paragraph">
        <a href="/login">
		<button class="btn btn-primary get-started-button"
          >Get Started!</button
        >
		</a>
        Here you can make quizzes and share them with your friends.
      </p>
    </div>
  </div>
</section>

<style>
  .top-container {
    width: 100%;
    height: 92vh;
    /* margin-top: 150px; */
    /* margin-left: 150px; */
    padding-top: 150px;
    padding-left: 150px;
    background-image: url("$lib/assets/background.jpg");
  }

  .intro-container {
	width: 600px;
  }

  .intro-heading {
    /* text-transform: uppercase; */
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 64px;
    width: 600px;
    text-align: center;
  }

  #intro-heading-master-span {
    color: rgb(20, 161, 117);
  }

  .intro-paragraph {
    margin-top: 30px;
    font-family: Helvetica, arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
  }

  .get-started-button {
    float: left;
    margin-left: 30px;
    margin-right: 10px;
    background-color: rgb(20, 161, 117);
    border-color: rgb(20, 161, 117);
    height: 60px;
    width: 150px;
    font-size: 20px;
    border-radius: 10px;
  }

  .get-started-button:hover {
    background-color: rgb(6, 126, 88);
    border-color: rgb(6, 126, 88);
  }
</style>
