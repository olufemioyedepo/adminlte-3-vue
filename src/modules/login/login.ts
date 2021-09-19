import {Options, Vue} from 'vue-class-component';
import {loginByAuth, loginByGoogle, loginByFacebook} from '@/services/auth';
import Checkbox from '@/components/checkbox/checkbox.vue';
import Input from '@/components/input/input.vue';
import Button from '@/components/button/button.vue';

@Options({
    components: {
        'app-checkbox': Checkbox,
        'app-input': Input,
        'app-button': Button
    }
})
export default class Login extends Vue {
    private appElement: HTMLElement | null = null;
    public email: string = '';
    public password: string = '';
    public rememberMe: boolean = false;
    public isAuthLoading: boolean = false;
    public isFacebookLoading: boolean = false;
    public isGoogleLoading: boolean = false;

    public mounted(): void {
        this.appElement = document.getElementById('app') as HTMLElement;
        this.appElement.classList.add('login-page');
    }

    public unmounted(): void {
        (this.appElement as HTMLElement).classList.remove('login-page');
    }

    public async loginByAuth(): Promise<void> {
        try {
            this.isAuthLoading = true;
            const token = await loginByAuth(this.email, this.password);
            this.isAuthLoading = false;
            console.log(token);
        } catch (error) {
            this.isAuthLoading = false;
            console.log(error);
        }
    }

    public async loginByFacebook(): Promise<void> {
        try {
            this.isFacebookLoading = true;
            const token = await loginByFacebook();
            console.log(token);
            this.isFacebookLoading = false;
        } catch (error) {
            console.log(error);
            this.isFacebookLoading = false;
        }
    }

    public async loginByGoogle(): Promise<void> {
        try {
            this.isGoogleLoading = true;
            const token = await loginByGoogle();
            console.log(token);
            this.isGoogleLoading = false;
        } catch (error) {
            console.log(error);
            this.isGoogleLoading = false;
        }
    }
}
