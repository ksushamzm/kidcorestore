<template>
    <v-container>
        <nav>
            <h2> Вход </h2> 
        </nav>

        <div>
            <div>Номер телефона</div>
            <input type="tel" v-model="model.phone">
        </div>
        <br>
        <div>
            <div>Пароль</div>
            <input type="password" v-model="model.password">
        </div>
        <br>
        <button @click="onLogin(model)" class="save">Войти</button>
        <router-link to="/auth/sign-up">
            <h5>Регистрация</h5>
        </router-link>
    </v-container>  
</template>

<script setup>
    import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';
    import { useAuth } from '@/composables';
 
    const model = ref({
        phone: '89200282930',
        password: '12345'
    });

    const { onLogin } = useAuth();
</script>