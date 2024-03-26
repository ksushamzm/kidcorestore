<template>
    <nav class="v-menu">
        <router-link to="/catalog" class="v-menu__item">
            <img class="v-menu__item" src="/меню.png" 
        </router-link>
    </nav>
</template>


<style>
    .v-menu {
        display: flex;
        flex-flow: row wrap;
        gap: 0 10px;
    }

    .v-menu__item {
        color: var(--color-black);
    }

    .v-menu__item.router-link-active {
        color: #224D93;
    }
</style>