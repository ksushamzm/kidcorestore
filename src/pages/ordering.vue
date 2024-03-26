<template>
    <v-container>
        <div>
            <h2>Доставка</h2>
            Количество товаров: {{ cartTotalCount }}
        </div>
        <div>
            Итоговая стоимость: {{ cartTotalSum }}р.
        </div>

        <div>
            <hr>
            <label>
                Адрес<br>
                <input type="text" v-model="model.address">
            </label>
        </div>

        <div>
            <hr>
            <label>
                ФИО<br>
                <input type="text"  class="namename" v-model="model.user.name1">
            </label>
        </div>

        <div>
            <h4>Способ оплаты</h4>

            <div>
                <label><input type="radio" v-model="model.paymentId" value="1" name="payment"> При получении</label>
                <label><input type="radio" v-model="model.paymentId" value="2" name="payment"> Онлайн</label>
                <label><input type="radio" v-model="model.paymentId" value="3" name="payment"> Наличными</label>
                <label><input type="radio" v-model="model.paymentId" value="4" name="payment"> Переводом</label>
            </div>
        </div>

        <div>
            <h4>Тип доставки</h4>
            <div>
                <label><input type="radio" v-model="model.deliveryId" value="1" name="delivery"> Почта России</label>
                <label><input type="radio" v-model="model.deliveryId" value="2" name="delivery"> СДЭК</label>
                <label><input type="radio" v-model="model.deliveryId" value="3" name="delivery"> Самовывоз</label>
                <label><input type="radio" v-model="model.deliveryId" value="4" name="delivery"> Курьер</label>
            </div>
        </div>

        <br>

        <v-button 
            theme="primary"
            size="medium"
            @click="onSubmit"
        >
            Оформить заказ
        </v-button>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import VContainer from '@/components/VContainer.vue';
    import VButton from '@/components/UI/VButton.vue';
    import { useOrdering } from '@/composables';
    import { useCart } from '@/composables';
    
    const { createOrder } = useOrdering();

    const model = ref({
        address: '',
        user: {
            name1: '',
        },
        paymentId: '',
        deliveryId: '',
    });

    const {
        cartTotalCount, 
        cartTotalSum, 
        getCart
    } = useCart();

    getCart();
    

    function onSubmit () {
        createOrder(model.value);
    }
</script>