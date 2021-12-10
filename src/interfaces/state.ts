import {IUser} from './user';
import {PixelAuthResposeContent} from '@/interfaces/auth/loginresponse';
export interface IAuthState {
    token: string;
    jwt: string;
    user: IUser;
    userinfo: PixelAuthResposeContent;
}

export interface IAuthModule {
    namespaced: boolean;
    state: IAuthState;
    mutations: any;
    actions: any;
    getters: any;
}
