<template>
    <v-container>
        <h2>Рекомендованные</h2>
        <v-row>
            <v-col 
                v-for="product in smartphones"
                span="3"
                md="6"
                sm="12"
            >
                <v-catalog-card 
                    :id="product.id"
                    :image="product.image"
                    :title="product.title"
                    :category="product.categoryId"
                    :is-favorites="product.isFavorites"
                    @addToFavorites="onToggleFavorites"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { useCatalogCategory, useFavorites } from '@/composables';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const { onToggleFavorites } = useFavorites();

    const { 
        products: smartphones, 
        getProductsCategory: getProductsCategorySmartphones
    } = useCatalogCategory();

    getProductsCategorySmartphones(1);

</script>