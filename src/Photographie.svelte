<script>
    import Contacter from "./lib/Contacter.svelte";
</script>

<div
    class="h-screen flex flex-col items-center justify-center items-center text-center montserrat"
>
    <h1 class="font-semibold text-5xl leading-tight tangerine">
        I am also <span class="text-blue-500">Photographer</span><br />
    </h1>
    <div class="text-lg font-semibold text-gray-600 dark:text-slate-300">
        Photographer | Emerging Graphic Designer
    </div>
    <p class="max-w-lg my-4 text-gray-600 dark:text-white">
        En tant que photographe/vidéaste, je collabore avec une équipe
        compétente spécialisée dans les domaines de la photographie et de la
        vidéo. Je m'engage à résoudre les problématiques de mes clients en
        proposant des solutions tout-en-un.
    </p>
    <Contacter />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");
    m .montserrat {
        font-family: "montserrat", sans-serif;
    }
</style>
