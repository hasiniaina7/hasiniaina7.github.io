<script>
    import {
        Rating,
        AdvancedRating,
        GradientButton,
        Heading,
        P,
    } from "flowbite-svelte";
    import {
        Html5Brand,
        Css3Brand,
        JsBrand,
        PythonBrand,
    } from "svelte-awesome-icons";
    import svleteIcon from "./assets/svelte.svg";
    let ratingIsVisible = true;
    let learningIsVisible = false;
    let htmlRating = 4.2;
    let cssRating = 3.8;
    let jsRating = 3.5;
    let svelteRating = 3.2;
    let pythonRating = 2;
    let starSize = 50;
    let logoSize = 50;
    // Une fonction qui retourne le nom de l'icône correspondant au label
</script>

<main class="h-screen flex flex-col justify-center items-center">
    <section class="montserrat">
        <div class="skills flex text-center">
            <Heading class="tangerine">Skills</Heading>
            <P>Auto-evaluation</P>
        </div>
    </section>
    <div class="skills-button gap-8">
        <GradientButton
            color="cyan"
            on:click={() => {
                ratingIsVisible = true;
                learningIsVisible = false;
            }}>Rating</GradientButton
        >
        <GradientButton
            color="cyan"
            on:click={() => {
                ratingIsVisible = false;
                learningIsVisible = true;
            }}
        >
            Learning</GradientButton
        >
    </div>

    <section class=" rating-learning-div">
        {#if ratingIsVisible}
            <!-- content here -->
            <div class="rating-div text-black dark:text-white">
                <div class=" rating-items mt-4">
                    <div class="rating-wrapper">
                        <span><Html5Brand size={logoSize} /></span>
                        <Rating
                            id="HTML"
                            total={5}
                            size={starSize}
                            rating={htmlRating}
                        />
                    </div>
                    <div class="rating-wrapper">
                        <span><Css3Brand size={logoSize} /></span>
                        <Rating
                            id="CSS3"
                            total={5}
                            size={starSize}
                            rating={cssRating}
                        />
                    </div>
                    <div class="rating-wrapper">
                        <span><JsBrand size={logoSize} /></span>
                        <Rating
                            id="Javascript"
                            total={5}
                            size={starSize}
                            rating={jsRating}
                        />
                    </div>
                    <div class="rating-wrapper">
                        <span><img src={svleteIcon} alt="" /></span>
                        <Rating
                            id="Svelte"
                            total={5}
                            size={starSize}
                            rating={svelteRating}
                        />
                    </div>
                    <div class="rating-wrapper">
                        <span><PythonBrand size={logoSize} /></span>
                        <Rating
                            id="Python"
                            total={5}
                            size={starSize}
                            rating={pythonRating}
                        />
                    </div>
                </div>
            </div>
        {/if}
        <!-- Learning content here -->
        {#if learningIsVisible}
            <div class="learning-div flex flex-col items-center">
                <div class=" mt-4 w-full max-w-md rating-items">
                    <AdvancedRating
                        ratingDivClass="advanced-rating mx-4 w-3/5 h-5 bg-gray-200 rounded dark:bg-gray-700"
                        ratings={[
                            { label: "HTML", rating: 80 },
                            { label: "CSS 3", rating: 70 },
                            { label: "JScrip", rating: 60 },
                            { label: "Svelte", rating: 30 },
                            { label: "Pythn", rating: 20 },
                        ]}
                    ></AdvancedRating>
                </div>
            </div>
        {/if}
    </section>
    <div
        class=" flex flex-col justify-center items-center text-center montserrat"
    >
        <p class="max-w-lg text-gray-600 dark:text-white">
            Avec HTML, je structure le contenu de mes pages web. Grâce à CSS,
            j'apporte style et animation à ces pages. En utilisant JavaScript et
            Svelte, je rends mes créations interactives et dynamiques, tout en
            intégrant habilement les APIs.
        </p>
    </div>
</main>

<!-- .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
} -->
<style>
    .rating-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .rating-wrapper span {
        margin-right: 10px;
        font-weight: bold;
    }
    div span {
        padding-right: 20px;
    }
    .skills-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rating-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .rating-items {
        min-height: 310px;
    }
    .skills {
        flex-direction: column;
        align-items: center;
    }
</style>
