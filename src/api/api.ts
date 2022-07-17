import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9df85157-ef47-4383-94d5-5e90e6d2a59b'
    },
})

export const userAPI = {

    getUsers(currentPage: number = 1, pageSize: number = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId: string) {

        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unFollowUser(userId: string) {

        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getMyId() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        debugger
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}


