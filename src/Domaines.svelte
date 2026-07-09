<script>
    let element = $state();
    let intersecting = $state(false);

    const domaines = [
        "Maitrise la communication journalistique",
        "Expérience en Développement Web",
        "Expérimenté en Photo/Vidéos",
        "Passionné aux domaines du tourisme informatisé",
    ];

    $effect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                intersecting = entry.isIntersecting;
            },
            { threshold: 0.5 },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    });
</script>

<!-- Techique pour detercter si un element est dans l'ecran  -->
<div class:intersecting class=" not-visible">
    {intersecting ? "Element is in view" : "Element is not in view"}
</div>

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
                        <ul class="list-disc pl-6">
                            {#each domaines as domaine, index}
                                <li
                                    class="typewriter-line"
                                    style:animation-delay={`${index * 160}ms`}
                                >
                                    {domaine}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

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

    .typewriter-line {
        animation: reveal-line 500ms ease both;
    }

    @keyframes reveal-line {
        from {
            opacity: 0;
            transform: translateY(0.4rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
