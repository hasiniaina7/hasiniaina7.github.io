<script>
    import Contacter from "./lib/Contacter.svelte";
</script>

<div class="h-screen flex flex-col items-center pt-12 text-center montserrat">
    <h1 class="font-semibold text-5xl leading-tight tangerine">
        I am also <span class="text-blue-500">Photographer</span><br />
    </h1>
    <div class="text-lg font-semibold text-gray-600 dark:text-slate-300">
        Photographer | Emerging Graphic Designer
    </div>
    <p class="max-w-lg my-4 text-gray-600 dark:text-white">
        Je réponds aux problématiques digitales en mettant l’humain au cœur de
        mes réflexions ! Également diplômée en Gestion & Marketing, j'utilise
        ces compétences pour valoriser les objectifs business de mes clients.
    </p>
    <Contacter />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");

    .montserrat {
        font-family: "montserrat", sans-serif;
    }
</style>
