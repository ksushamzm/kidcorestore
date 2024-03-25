<template>
    <v-container>
       <label>
            <div>ФИО:</div>

            <input type="text" v-model="model.name1">
       </label>

       <label>
            <div>Электронная почта:</div>

            <input type="email" v-model="model.email">
       </label>
       <label>
            <div>Телефон:</div>

            <input type="tel" v-model="model.phone">
       </label>

       <label>
            <div>Пароль:</div>

            <input type="password" v-model="model.password">
       </label>

       <label>
            <div>Подтверждение пароля:</div>

            <input type="password" v-model="model.confirmPassword">
       </label>

        <br>

       <button @click="onSubmit">Зарегистрироваться</button>


       <br><br>

     <router-link to="/auth/sign-in">
          Уже зарегистрированы?
     </router-link>
    </v-container>  
</template>

<script setup>
    import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';
    import { useRegistration } from '@/composables';

    const { signUp } = useRegistration();

    const model = ref({
        name1: 'Мишуткина Варвара Анатольевна',
        email: 'mishutkina@mail.ru',
        phone: '89200282930',
        password: '12345',
        confirmPassword: '12345'
    });

    function onSubmit () {
     if (model.value.password !== model.value.confirmPassword) {
          alert('Пароли не совпадают')

          return;
     }

     signUp(model.value);
    }
</script>