import {IUser} from '@/interfaces/user';
import router from '@/router/index';
import {PixelAuthResposeContent} from '@/interfaces/auth/loginresponse';

export default {
    login: (context: any, payload: string): void => {
        context.commit('setToken', payload);
        router.replace('/');
    },
    setlogintoken: (context: any, payload: string): void => {
        context.commit('setJwt', payload);
        router.replace('/');
    },
    setuserinfo: (context: any, payload: PixelAuthResposeContent): void => {
        context.commit('setUserInfo', payload);
        //router.replace('/');
    },
    getUser: (context: any, payload: IUser): void => {
        context.commit('setUser', payload);
    },
    logout: (context: any): void => {
        context.commit('setToken', null);
        context.commit('setUser', null);
        localStorage.removeItem('gatekeeper_token');
        //router.replace('/login');
    },
    doLogout: (context: any): void => {
        context.commit('setJwt', null);
        context.commit('setUserInfo', null);
        localStorage.removeItem('jwt');
        router.replace('/auth/login');
    }
};
