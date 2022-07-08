<script context="module">
    export const prerender = true;
</script>  

<svelte:head>
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

<section class="footer">
    <p> Copyright ©2022 All rights reserved | Made with ♥ by QuizMaster dev team. </p>
</section>

<style lang="scss">
    .footer{
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.95);
        p{
            color: white;
            text-align: center;
            font-size: 13px;
            padding: 10px;
            margin: 0px;
        }
    }
</style>