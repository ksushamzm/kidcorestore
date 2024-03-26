<template>
    <v-container>
        <nav>
            <h2> Профиль </h2> 
        </nav>

        <div v-if="user">
            <div>ФИО: <input type="text" v-model="model.name1" class="namename"></div> <br>
            <div>Электронная почта: <input type="email" v-model="model.email"></div> <br>
            <div>Телефон: <input type="tel" v-model="model.phone"></div> <br>
            <div>Адрес доставки <input v-model="model.address" class="text4"></div> <br>
        </div>

        <button @click="onUpdate" class="save">Сохранить</button>

        <br>

        <button @click="logout" class="end">Выход</button>

        <hr>

        <router-link to="/profile/add-product">
                Добавить товар
            </router-link>
    </v-container>
</template>

<script setup>
    import { useAuth, useUserProfile } from '@/composables'
    import VContainer from '@/components/VContainer.vue';

    const { user, logout, updateUser } = useAuth();
    const { model } = useUserProfile();

    function onUpdate () {
        updateUser(user.value.id, model.value);
    }
</script>

<style>

</style>