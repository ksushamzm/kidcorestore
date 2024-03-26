<template>
    <v-container>
        <nav> 
            <h2> Поиск </h2>
        </nav>

        <template v-if="!isLoading">
            <v-row v-if="products.length">
                <v-col
                    v-for="product in products"
                    span="3"
                    md="6"
                    sm="12"
                >

         <v-catalog-card 
                :id="product.id"
                :price="product.price"
                :image="product.image"
                :title="product.title"
                :category="product.categoryId"
                @add-to-cart="onAddToCart"/>

         </v-col>
         </v-row>

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
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';

    const { products, isLoading, getSearch } = useSearch();
    const { onAddToCart } = useCart();

    const route = useRoute();

    getSearch(route.query.q);

    watch(() => route.query.q, () => {
        getSearch(route.query.q);
    });
</script>

