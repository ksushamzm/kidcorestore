<template>
    <v-container>
        <h2>Рекомендованные</h2>
        <v-row>
            <v-col 
                v-for="product in forYou"
                span="3"
                md="6"
                sm="12">

                <v-catalog-card 
                    :id="product.id"
                    :image="product.image"
                    :title="product.title"
                    :price="product.price"
                    :category="product.categoryId"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { useCatalogCategory} from '@/composables';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';

    const { 
        products: forYou, 
        getProductsCategory: getProductsCategoryForYou
    } = useCatalogCategory();

    getProductsCategoryForYou(2);

</script>