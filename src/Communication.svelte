<script>
    import Contacter from "./lib/Contacter.svelte";
</script>

<div class=" h-screen flex flex-col items-center pt-12 text-center montserrat">
    <h1 class="font-semibold text-5xl leading-tight tangerine">
        Devenir <span class="text-blue-500">Journaliste Informatique</span><br
        />
    </h1>
    <div class="text-lg font-semibold text-gray-600 dark:text-slate-300">
        Journaliste | Technologie Informatique
    </div>
    <p class="max-w-lg my-4 text-gray-600 dark:text-white">
        Je suis entrain de preparer mon Diplome de Master en Communication!
        J'utilise mes compétences en Informatique + Communication pour valoriser
        mes objectifs et les business de mes clients.
        <span class=" text-blue-400 underline"
            >Si vous avez une idée à realisez, veillez me contacter</span
        >
    </p>
    <Contacter />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Tangerine:wght@700&display=swap");

    .montserrat {
        font-family: "montserrat", sans-serif;
    }
</style>
