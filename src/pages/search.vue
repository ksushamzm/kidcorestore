<template>
    <v-container>
        <template v-if="!isLoading">
            <v-catalog-card 
                v-if="products.length"
                v-for="product in products"
                :id="product.id"
                :title="product.title"
                :category="product.category"
                @add-to-cart="onAddToCart"
            />

            <div v-else>
                По запросу {{ route.query.q }} ничего не найдено. Проверьте, нет ли ошибок в ведённом запросе.
            </div>
        </template>

        <div v-else>
            Ищем товар!
        </div>
    </v-container>
</template>

<script setup>
    import { watch } from 'vue'
    import { useRoute } from 'vue-router';
    import { useSearch, useCart } from '@/composables';
    import VContainer from '@/components/VContainer.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const { products, isLoading, getSearch } = useSearch();
    const { onAddToCart } = useCart();

    const route = useRoute();

    getSearch(route.query.q);

    watch(() => route.query.q, () => {
        getSearch(route.query.q);
    });
</script>

