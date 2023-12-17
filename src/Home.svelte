<script>
    import { Span, Button, GradientButton, P, Heading } from "flowbite-svelte";
    import { GithubBrand, LinkedinBrand } from "svelte-awesome-icons";
    import Contacter from "./lib/Contacter.svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    let homeTransition = false;
    onMount(() => {
        homeTransition = true;
    });
</script>

<main>
    <section class="column:2 montserrat home">
        <div
            class="h-screen home-text text-center flex flex-col justify-center items-center"
        >
            {#if homeTransition}
                <!-- content here -->
                <p
                    transition:fade={{ delay: 500, duration: 1000 }}
                    class="text-7xl dark:text-white tangerine"
                >
                    Hello, My Name is <Span underline>Hasina</Span>
                </p>
            {/if}
            <GradientButton color="cyan"
                ><GithubBrand />
                <span class="pl-2">Join me on GitHub</span></GradientButton
            >
            <GradientButton
                ><LinkedinBrand />
                <span class="pl-2"> Connect with LinkedIn</span>
            </GradientButton>
            <div class="flex justify-center pt-4">
                <P class="bg-gradient-to-r from-cyan-500 to-blue-500  "
                    ><Heading tag="h6">
                        Ingeneer | Programmer | Web Developper | Photographer
                    </Heading></P
                >
            </div>
            <div class="max-w-lg dark:text-white py-5">
                Bienvenue sur mon site web ! En tant que développeur web
                passionné par l'univers du tourisme en ligne, je fusionne ma
                passion pour la technologie avec une expertise en communication
                digitale. Explorez mon portfolio pour découvrir comment
                j'associe créativité et compétences techniques pour façonner des
                expériences en ligne uniques dans le domaine du tourisme.
            </div>
            <Contacter />
        </div>
    </section>
    <div class="pdp-img">
        <img class="rounded-full" alt="Hasina" src="/src/assets/pdp.jpg" />
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");
    /* main {
        width: 100%;
        height: 100%;
    } */
    .tangerine {
        font-family: "Tangerine", cursive;
    }
    .montserrat {
        font-family: "montserrat", sans-serif;
    }
    .pdp-img {
        max-width: 512px;
        margin: 0 auto;
        display: block;
    }
</style>
