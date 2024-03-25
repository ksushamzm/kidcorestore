import { ref, watch } from 'vue';
import { useAuth } from '@/composables';

export function useUserProfile () {
    const { user } = useAuth();

    const model = ref({
        name1: '',
        email: '',
        phone: '',
        address: ''
    });

    watch(user, value => {
        if (!value) {
            return;
        }
        model.value.name1 = value.name1;
        model.value.email = value.email;
        model.value.phone = value.phone;
        model.value.address = value.address;
    }, {
        immediate: true
    });

    return {
        model
    };
}