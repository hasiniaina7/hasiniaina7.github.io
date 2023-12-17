<script>
    import { Gallery } from "flowbite-svelte";

    const images = [
        {
            alt: "shoes",
            src: "/src/images/porfolio/C01.png",
        },
        {
            alt: "small bag",
            src: "/src/images/porfolio/C11.png",
        },
        {
            alt: "plants",
            src: "/src/images/porfolio/C02.png",
        },
        {
            alt: "watch",
            src: "/src/images/porfolio/C12.png",
        },
    ];
</script>

<div class=" flex flex-col items-center text-center">
    <h1 class="font-semibold text-5xl leading-tight tangerine">
        Quelques <span class="text-blue-500">Realisation</span><br />
    </h1>
    <div class="text-lg font-semibold text-gray-600 dark:text-slate-300">
        Music Player for BIG MJ | Malagasy Last Name finder
    </div>
    <p class="max-w-lg my-4 text-gray-600 dark:text-white">
        Quelques application WEB sont en cours de developpement. Ils sont deja
        mis en ligne sur les hebergeurs gratuit. Vous pour les consulter sur les
        liens suivant et trouver les codes sources sur GitHub
        <span class=" text-blue-400 underline">
            <br />
            <a href="https://album-mpanjaka.netlify.app/">Album Mpanjaka</a><br
            />

            <a href="https://hijery-anarana.netlify.app/"
                >Malagasy Last Name finder</a
            >
        </span>
    </p>
    <div class="gallery mx-7">
        <Gallery class="gap-2 grid-cols-2 max-w-screen-sm" items={images} />
    </div>
</div>

<style>
    .gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
