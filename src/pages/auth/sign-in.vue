<template>
    <v-container>
        <div>
            <div>Номер телефона</div>
            <input type="text" v-model="model.phone">
        </div>

        <div>
            <div>Пароль</div>
            <input type="password" v-model="model.password">
        </div>

        <button @click="onLogin(model)">Войти</button>

        <br><br>

        <router-link to="/auth/sign-up">
            Ещё не зарегистрированы?
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