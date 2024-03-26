<template>
    <v-container>
        <h2> Корзина </h2>
        <div>
            Количество товаров: {{ cartTotalCount }}
        </div>
        <div>
            Итоговая стоимость: {{ cartTotalSum }}р.
        </div>
        <hr>
        <v-row>
            <v-col
            v-for="cartItem in cartNotDelay"
            span="3"
            md="6"
            sm="12">

            <v-cart-card 
                :id="cartItem.id"
                :title="cartItem.title"
                :price="cartItem.price"
                :quantity="cartItem.quantity"
                :image="cartItem.image"
                @delete="onDelete"
            />
            
    </v-col>
    </v-row>
    <hr>
    <router-link to="/ordering">
            Оформить заказ
        </router-link>
    </v-container>
        <hr>
</template>

<script setup>
    import { useCart } from '@/composables';
    import VContainer from '@/components/VContainer.vue';
    import VCartCard from '@/components/VCartCard.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';

    const { 
        cartNotDelay,
        cartTotalCount, 
        cartTotalSum, 
        getCart,
        onDelete 
    } = useCart();

    getCart();
</script>

<style>

</style>