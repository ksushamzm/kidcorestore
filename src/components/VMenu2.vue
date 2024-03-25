<template>
    <nav class="v-menu2">
        <router-link to="/cart" class="v-menu2__item">
        <img class="v-menu__item" src="../assets/img/корзина.png">
    </router-link>
    </nav>
</template>


<style>
    .v-menu2 {
        display: flex;
        flex-flow: row wrap;
        gap: 0 10px;
    }

    .v-menu2__item {
        color: var(--color-black);
    }
</style>