import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";
import {UsersType} from "../redux/users-reducer";
import {setUserDataType} from "../redux/auth-reducer";

type CommonResponseType<T> = {
    data:T;
    resultCode:number;
    messages:string[];
    fieldsErrors:string[];

}

export type GetUsersType = {
    error: string;
    totalCount: number;
    items: UsersType[]
}

type GetAuthType = {
    data:setUserDataType
    resultCode: number;
    messages: string[];
    fieldsErrors: string[];
}

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY': '1eaa5d66-d310-487c-a1d0-2fd59af6c2de'
    }
})
export const usersAPI = {
    getUsers (currentPage:number,pageCount:number) {
        return  instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageCount}`).then(response=> {
            return response.data
        })
    },
    getProfile (userId:number)  {
        console.warn('Obsolete method. Please use profileApi object.')
        return profileAPI.getProfile(userId)
   },

    FollowFriends(id:number){
        return instance.post<CommonResponseType<{}>>(`follow/${id}`).then(response=>response.data)
    },
    UnFollowFriends(id:number){
        return instance.delete<CommonResponseType<{}>>(`follow/${id}`).then(response=>response.data)
    }
}
export const authAPI = {
    getAuthMe (){
        return instance.get<GetAuthType>(`auth/me`).then(response=>response.data)
    }
}

export const profileAPI = {
    getProfile (userId:number)  {
        return  instance.get<ProfileType>(`profile/`+ userId)
    },
    getStatus (userId:number) {
        return instance.get<any>('profile/status/'+userId)
    },
    updateStatus (status:string) {
        return instance.put<CommonResponseType<{data:string}>>('profile/status',{status})
    }
}