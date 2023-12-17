<script>
    import { DarkMode } from "flowbite-svelte";
    import Home from "./Home.svelte";
    import Nav from "./Nav.svelte";
    import Photographie from "./Photographie.svelte";
    import Communication from "./Communication.svelte";
    import Domaines from "./Domaines.svelte";
    import Footer from "./Footer.svelte";
</script>

<Nav />
<DarkMode />
<Home />
<Photographie />
<Communication />
<Domaines />
<Footer />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Tangerine:wght@700&display=swap");
    /* font-family: "Montserrat", sans-serif;
    font-family: "Tangerine", cursive; */
</style>
