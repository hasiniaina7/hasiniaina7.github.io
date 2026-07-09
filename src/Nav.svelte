<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
</script>

<Navbar
    color="primary"
    class="fixed left-0 right-0 top-0 z-40"
    navContainerClass="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600"
>
    <NavBrand href="/">
        <img
            src="/icon.png"
            class="me-3 h-6 sm:h-9"
            alt="Hasiniaina Inirial Letter"
        />
    </NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Resume</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
