<template>
    <div class="v-cart-card">
        <div>{{ image }}</div>
        <hr>
        <div>{{ title }}</div>
        <hr>
        <div>{{ price }} ₽ </div>
        <hr>
        <v-button @click="onDelete">
            Удалить
        </v-button>
        <hr>
    </div>
</template>

<script setup>
    import VButton from '@/components/UI/VButton.vue';
    
    const props = defineProps({
        id: {
            type: Number
        },
        title: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: Number
        }
    });

    const emit = defineEmits([
        'delete'
    ]);

    function onDelete () {
        emit('delete', props.id);
    }
</script>