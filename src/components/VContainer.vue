<template>
    <div class="v-container">
        <slot/>
    </div>
</template>

<style>
    .v-container {
        max-width: 1300px;
        margin: 10px;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
    }
</style>