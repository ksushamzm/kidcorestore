<template>
    <footer class="v-footer">
        <v-container>
           <h5> Категории <hr>
            О нас  <hr>
            Личный кабинет  <hr>
            Политика конфиденциальности  <hr>
            Оплата и доставка  <hr>
            Возврат </h5> 
        </v-container>
    </footer>
</template>

<script setup>
    import VContainer from '@/components/VContainer.vue';
</script>

<style>
    .v-footer {
        border-top: 2px solid;
        padding: 10px 0;
    }

    hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 0px;
}
</style>