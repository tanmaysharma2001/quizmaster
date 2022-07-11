<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import lottieSrc from '$lib/assets/lottie/lottie-home.json?url';
  import { menuActiveItem } from '$lib/scripts/menu.js'
  import { onDestroy, onMount } from 'svelte';
  // typeWriter effect
  // typeWriter effect
  let type_effect : HTMLElement;
  let s : number = 0; // sentence index
  let l : number = 0; // letter index
  let txt : string [] = [
                          'Share quizzes with friends!',
                          'Check your knowledge!',
                          'Study on your own',
                        ]; // text
  let speed : number= 100; // typing speed
  function typeWriter(txt : string[]): void{
      let text : string = txt[s];
      let sentence_length : number = text.length;
      if(l < sentence_length){
          let typeContainer: HTMLElement | null = type_effect;
          if(typeContainer != null){
              typeContainer.innerHTML += text.charAt(l);
              l++;
          }
          setTimeout(function(){typeWriter(txt)}, speed);
      } else {
          l = 0;
          s++;
          if(s >= txt.length) s = 0;
          function removeLastLetter(): void{
              let typeContainer: HTMLElement | null = type_effect;
        
              if(typeContainer != null && typeContainer.innerHTML.length > 0){
                  let tmp: string[] = typeContainer.innerHTML.split("");
                  tmp.pop();
                  type_effect!.innerHTML = tmp.join("");
                  setTimeout(function(){removeLastLetter()}, speed);
              } else {
                  setTimeout(function(){typeWriter(txt)}, speed);
              }
          }
          removeLastLetter();  // remove the existing text letter by letter
      }
  }
  typeWriter(txt); // text 
  onMount(() => {
    let menuItems = document.getElementsByClassName("nav-item") as unknown as HTMLElement[];
    let activeMenuItem = (document.title).replace("QuizMaster | ", "");
    menuActiveItem(menuItems, activeMenuItem);
  });
</script>

<svelte:head>
  <title>QuizMaster | Home</title>
  <meta name="description" content="QuizMaster Home page." />

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
  <script defer src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<section class="home" >
  <div class="home-container">
    <h1 class="intro-heading">
      Welcome to the <br> Quiz<span id="intro-heading-master-span">Master</span>
    </h1>
    <p class="intro-paragraph" bind:this={type_effect}></p>
    <a href="/login" class="btn btn-primary get-started-button" >Get Started! </a>
  </div>
  <div class="lottieHome">
    <lottie-player src={ lottieSrc } loop nocontrols autoplay></lottie-player>
  </div>

</section>

<style lang="scss">
  @import '../lib/assets/styles/common.scss';

  .home{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: calc( 100vh - 66px);
    overflow: hidden;
    line-height: 40px;
    .home-container{
      text-align: left;
      display: flex;
      flex-flow: column nowrap;
      align-items: left;
      .intro-heading {
        font-family: "Montserrat";
        font-weight: 700;
        font-size: clamp(2.5rem, 10vw, 4.5rem);
        text-align: left;
      }

      #intro-heading-master-span {
        color: rgb(20, 161, 117);
      }

      .intro-paragraph {
        font-family: Helvetica, arial, sans-serif;
        color: rgba(0, 0, 0, 0.5);
        height: 16px;
        margin: 0px 0px 40px 2px;
        font-size: 1.25rem;
      }

      .get-started-button {
        background-color: rgb(20, 161, 117);
        border: none;
        border-radius: 15px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 15px 20px;
      }

      .get-started-button:hover {
        background-color: rgb(6, 126, 88);
        border-color: rgb(6, 126, 88);
      }
    } 
    .lottieHome{
      display: inline-block;
      flex: 0 0 100%;
      max-width: 1000px;
      overflow: hidden;
      margin: 0px -220px;
      margin-top: -200px;
    }
  }

  @media screen and (max-width: 1100px){
    .home{
      .home-container{
        min-width: 300px;
        padding: 30px;
      }
      .lottieHome{
        display: none;
      }
    }
  }
</style>
