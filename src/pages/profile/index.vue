<template>
    <v-container>
        <nav>
            <br>
            Профиль 
        </nav>

        <br>

        <div v-if="user">
            <div>ФИО: <input type="text" v-model="model.name1"></div> <br>
            <div>Электронная почта: <input type="email" v-model="model.email"></div> <br>
            <div>Телефон: <input type="tel" v-model="model.phone"></div> <br>
            <div>Адрес доставки <input type="text" v-model="model.address"></div> <br>
        </div>

        <button @click="onUpdate">Сохранить</button>

        <br><br>

        <button @click="logout">Выход</button>

        <hr>

        <router-link to="/profile/add-product">
                Добавить товар
            </router-link> <br><br>
        <router-link to="/profile/products">
                Активные объявления
        </router-link> <br><br>
        Архивные объявления 
        Заказы <br><br>
        Мои отзывы <br><br>
        Избранное <br><br>
        Доставка <br><br>
        Адреса <br><br>
        Настройки <br><br>
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