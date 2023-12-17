<script>
    import { DarkMode } from "flowbite-svelte";
    import Nav from "./Nav.svelte";
    import Home from "./Home.svelte";
    import Rating from "./Rating.svelte";
    import Photographie from "./Photographie.svelte";
    import Communication from "./Communication.svelte";
    import Domaines from "./Domaines.svelte";
    import Portfolio from "./Portfolio.svelte";
    import Footer from "./Footer.svelte";
</script>

<Nav />
<DarkMode />
<Home />
<Rating />

<Photographie />
<Communication />
<Domaines />
<Portfolio />
<Footer />

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Tangerine:wght@700&display=swap");
    /* font-family: "Montserrat", sans-serif;
    font-family: "Tangerine", cursive; */
</style>
