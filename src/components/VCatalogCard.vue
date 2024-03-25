<template>
    <article class="v-catalog-card">
        <br>
        <router-link :to="`/catalog/${category}/${id}`">
            <img class="v-catalog-card__image" :src="image" >
        </router-link>
        <br>
        <router-link :to="`/catalog/${category}/${id}`">
            {{ title }}
        </router-link>

        <br>
        <br>

        <div>
            {{ price }} ₽
        </div>

        <br>
        <v-button
            theme="primary"
            size="large"
            wide
            @click="onAddToCart"
        >
            Добавить в корзину
        </v-button>
        <br>
    </article>
</template>

<script setup>
    import VButton from '@/components/UI/VButton.vue';

    const props = defineProps({
        category: {
            type: [String, Number]
        },
        id: {
            type: Number
        },
        price: {
            type: Number
        },
        title: {
            type: String
        },
        image: {
            type: String
        }
    });

    const emit = defineEmits([
        'addToCart'
    ]);


    function onAddToCart () {
        emit('addToCart', {
            title: props.title,
            image: props.image,
            price: props.price,
            id: props.id,
            quantity: 1
        });
    }

</script>

<style>
    .v-catalog-card {
        border: 0px solid;
    }

    .v-catalog-card__image {
    display: block;
    width: 280px;
    height: 300px;
    object-fit: cover;
    border: 2px solid #224D93;
}

.v-button {
    display: block;
    width: 280px;
    height: 50px;
    object-fit: cover;
    border: 2px solid #224D93;
    border-spacing: 10px;
}

</style>