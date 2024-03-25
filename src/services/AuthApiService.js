import { api } from '@/utils';

export class AuthApiService {
    static login (params) {
        return api.get(`/users?login=${params.phone}&password=${params.password}`);
    }

    static getUser (id) {
        return api.get(`/users?id=${id}`);
    }

    static updateUser (userId, params) {
        console.log(params);

        return api.patch(`/users/${userId}`, params);
    }
}