import {IAuthState} from '@/interfaces/state';
import {IUser} from '@/interfaces/user';
import { PixelAuthResposeContent } from '@/interfaces/auth/loginresponse';

export default {
    user: (state: IAuthState): IUser => state.user,
    token: (state: IAuthState): string => state.token,
    jwt: (state: IAuthState): string => state.jwt,
    userinfo: (state: IAuthState): PixelAuthResposeContent => state.userinfo,
    partnerId: (state: IAuthState): number => Number( state.userinfo?.clientNo),
};
