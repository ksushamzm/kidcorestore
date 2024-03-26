<template>
    <v-container>
        <h2>Добавить товар</h2>
        <div>
            Название
            <input type="text" v-model="model.title" class="text5">
        </div>
        <hr>
        <div>
            Описание
            <input class="text2" type="text" v-model="model.title">
        </div>
        <hr>
        <div>
            Категория
            <select v-model="model.categoryId">
                <option 
                    v-for="category in categories"
                    :value="category.id"
                >
                    {{ category.title }}
                </option>
            </select>
        </div>
        <hr>
        <div>
            Цена      
            <input class="text3" type="number" v-model="model.price"> ₽
        </div>
        <hr>

        <v-button theme="primary" size="medium" @click="onSubmit">
            Добавить товар
        </v-button>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';
    import VButton from '@/components/UI/VButton.vue';
    import { useCatalog } from '@/composables';

    const model = ref({
        image: '',
        title: '',
        categoryId: '',
        price: ''
    });

    const { categories, getCatalog, addProduct } = useCatalog();

    getCatalog();

    function onSubmit () {
        addProduct(model.value);
    }
</script>

<style>

</style>