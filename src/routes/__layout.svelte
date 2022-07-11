<script lang="ts">
  import Navbar from "$lib/Header/Navbar.svelte";
  import Footer from "$lib/Footer/footer.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  
  onMount(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCxBSFf2D1i4KQaKMI_IeciTjBuk-xJLco",
      authDomain: "kahoot-frontend.firebaseapp.com",
      projectId: "kahoot-frontend",
      storageBucket: "kahoot-frontend.appspot.com",
      messagingSenderId: "944238291320",
      appId: "1:944238291320:web:c71eb703245ad11e3d408d",
      measurementId: "G-M97JMYWPJ3",
    };

    const app = initializeApp(firebaseConfig);
  });
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />

<style>
</style>
