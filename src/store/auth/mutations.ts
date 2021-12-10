import {IAuthState} from '@/interfaces/state';
import {IUser} from '@/interfaces/user';
import {PixelAuthResposeContent} from '@/interfaces/auth/loginresponse';

export default {
    setToken: (state: IAuthState, payload: string): void => {
        state.token = payload;
    },
    setJwt: (state: IAuthState, payload: string): void => {
        state.jwt = payload;
        console.log(state);
    },
    setUserInfo: (state: IAuthState, payload: PixelAuthResposeContent): void => {
        state.userinfo = payload;
        console.log(state);
    },
    setUser: (state: IAuthState, payload: IUser): void => {
        state.user = payload;
    }
};
