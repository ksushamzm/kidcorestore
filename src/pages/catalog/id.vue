<template>
    <v-container v-if="product">
        <h2> Карточка товара</h2>
        <v-row>
            <v-col
                span="10"
                md="6"
                sm="12"
            >
                <v-catalog-card 
                    :id="product.id"
                    :price="product.price"
                    :image="product.image"
                    :title="product.title"
                    :category="product.categoryId"
                    @add-to-cart="onAddToCart"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { CatalogApiService } from '@/services';
    import VContainer from '@/components/VContainer.vue';
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const route = useRoute();

    const { getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category);

    const product = ref();

    CatalogApiService.getProduct(route.params.id)
        .then(data => {
            product.value = data;
        });
</script>
