<template>
    <div
        class="container-fluid"
        animate__animated
        animate__bounceInDown
        animate__faster
    >
        <div class="row">
            <div class="col-lg-6 col-xl-6 col-sm-6 login-section-wrapper">
                <div class="brand-wrapper">
                    <img
                        src="@/assets/img/logo-axa.png"
                        alt="logo"
                        class="logo"
                    />
                </div>
                <div class="my-auto login-wrapper">
                    <h1 class="login-title">Log in</h1>
                    <form>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                class="form-control"
                                v-model="loginPayload.username"
                            />
                        </div>
                        <div class="mb-4 form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                class="form-control"
                                v-model="loginPayload.password"
                            />
                        </div>
                        <button
                            name="login"
                            id="login"
                            class="btn btn-block login-btn"
                            type="button"
                            :disabled="signingIn == true"
                            @click="doLogin"
                        >
                            <span v-if="signingIn == true">
                                <span
                                    class="spinner-border spinner-border-sm"
                                ></span>
                                Signing in...
                            </span>
                            <span v-if="signingIn == false"> Login </span>
                        </button>
                        <div
                            class="text-center text-danger"
                            v-if="invalidLogin === true"
                        >
                            Invalid login credentials!
                        </div>
                    </form>
                </div>
            </div>
            <div class="px-0 col-sm-6 d-none d-sm-block">
                <img
                    src="@/assets/img/login2.jpg"
                    alt="login image"
                    class="login-img"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue';
import instance from '@/utils/axios';
import {useToast} from 'vue-toastification';
import {useStore} from 'vuex';
import {LoginResponse} from '@/interfaces/auth/loginresponse';

export default defineComponent({
    name: 'AppLogin',
    setup() {
        const store = useStore();
        const toast = useToast();
        const signingIn = ref(false);
        const invalidLogin = ref(false);
        const loginPayload = reactive({
            username: '',
            password: ''
        });
        var loginResponse = ref({} as LoginResponse);

        const toggleSignIn = () => {
            signingIn.value = !signingIn.value;
        };

        const doLogin = async () => {
            toggleSignIn();

            console.log(loginPayload);
            await instance
                .post('auth/login', loginPayload)
                .then((res) => {
                    var response = res;

                    console.log(res);
                    if (response !== null && response.data !== null) {
                        if (response.data.code !== 200) {
                            toast.error(`${response.data.message}`);
                        }

                        if (response.data.code === 200) {
                            toast.success('Login was successful!');

                            loginResponse.value = res.data;
                            console.log(loginResponse.value);
                            persistLoginResponse(loginResponse);
                        }
                    }

                    toggleSignIn();
                })
                .catch((error) => {
                    console.log(error);
                    toggleSignIn();

                    if (error.message === 'Network Error') {
                        toast.error('Could not connect to server!');
                    }

                    var errorResponse = error.response;
                    console.log(errorResponse);
                    if (errorResponse.status === 401) {
                        // invalid login credentials
                        toast.error('Invalid login credentials!');
                    }
                });
        };

        const persistLoginResponse = (response: any) => {
            var resp = response.value;

            if (resp !== null) {
                var token = resp.data.token;
                var userInfo = resp.data.pixelAuthResposeContent;

                localStorage.setItem('jwt', token);
                store.dispatch('auth/setuserinfo', userInfo);
                store.dispatch('auth/setlogintoken', token);
            }
        };

        return {
            signingIn,
            invalidLogin,
            loginPayload,
            doLogin
        };
    }
});
</script>
<style scoped src="@/modules/auth/login.css"></style>
