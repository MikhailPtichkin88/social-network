import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9df85157-ef47-4383-94d5-5e90e6d2a59b'
    },
})

type ResponseType<T> = {
    resultCode: number
    messages: string[],
    data: T
}


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
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {
            "email": email,
            "password": password,
            "rememberMe": rememberMe,
            "captcha": true
        })
    },

    logout(){
        return instance.delete<ResponseType<{}>>(`auth/login`)
            .then(res=>{
                if(res.data.resultCode === 0) console.log("Successful logout")
            })
            .catch(err=> console.log(err))
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status: any) {
        return instance.put(`profile/status`, status)
            .then(response => response.data)
    }
}

