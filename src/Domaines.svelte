<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { cascade } from "svelte-typewriter";
    let element;
    let intersecting;
</script>

<!-- Techique pour detercter si un element est dans l'ecran  -->
<div class:intersecting class=" not-visible">
    {intersecting ? "Element is in view" : "Element is not in view"}
</div>

<!-- content here -->
<IntersectionObserver {element} bind:intersecting threshold={0.5}>
    <div
        class="original-div h-screen flex items-center justify-center"
        bind:this={element}
    >
        {#if intersecting}
            <div id="domaines" class="">
                <div class="flex items-center justify-center mt-8">
                    <div class="relative w-full max-w-4xl mx-auto">
                        <div
                            class="border-l-2 border-gray-600 absolute top-0 left-0 h-full"
                        ></div>
                        <div
                            class="montserrat text-4xl rounded-lg py-6 px-8 brace shadow-lg"
                        >
                            <ul
                                class="list-disc pl-6"
                                use:cascade={{ interval: 60 }}
                            >
                                <li>
                                    Maitrise la communication journalistique
                                </li>
                                <li>Expérience en Développement Web</li>
                                <li>Expérimenté en Photo/Vidéos</li>
                                <li>
                                    Passionné aux domaines du tourisme
                                    informatisé
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");

    .montserrat {
        font-family: "montserrat", sans-serif;
    }

    .brace {
        position: relative;
        margin-left: 20px;
        padding-left: 20px;
    }

    .brace:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 100%;
        background-color: #000;
    }
    .not-visible {
        display: none;
    }

    .original-div {
        padding: 1rem;
    }
</style>
