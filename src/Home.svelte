<script>
    import { Span, Button, GradientButton, P, Heading } from "flowbite-svelte";
    import { GithubBrand, LinkedinBrand } from "svelte-awesome-icons";
    import Rating from "./Rating.svelte";
</script>

<main>
    <section class="column:2 montserrat home">
        <div class=" text-center">
            <p class="text-7xl dark:text-white tangerine">
                Hello, My Name is <Span underline>Hasina</Span>
            </p>
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
        </div>
        <div class="pdp-img mt-4">
            <img class="" alt="Hasina" src="src\assets\pdp.png" />
        </div>
    </section>
    <section class="montserrat">
        <div class="skills flex text-center">
            <Heading class="tangerine">Skills</Heading>
            <P>Auto-evaluation</P>
        </div>
        <Rating />
    </section>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");
    main {
        width: 100%;
        height: 100%;
    }
    .tangerine {
        font-family: "Tangerine", cursive;
    }
    .montserrat {
        font-family: "montserrat", sans-serif;
    }
    /* .pdp {
        border-radius: 200px;
        width: 80%;
    } */
    .skills {
        flex-direction: column;
        align-items: center;
    }
</style>
