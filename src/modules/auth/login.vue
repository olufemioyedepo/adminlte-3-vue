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
                <div class="login-wrapper my-auto">
                    <h1 class="login-title">Log in</h1>
                    <form action="#!">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="form-control"
                                v-model="loginPayload.email"
                            />
                        </div>
                        <div class="form-group mb-4">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                                v-model="loginPayload.password"
                            />
                        </div>
                        <button
                            name="login"
                            id="login"
                            class="btn btn-block login-btn"
                            type="button"
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
            <div class="col-sm-6 px-0 d-none d-sm-block">
                <img
                    src="@/assets/img/login.jpg"
                    alt="login image"
                    class="login-img"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from 'vue';
export default defineComponent({
    name: 'AppLogin',
    setup() {
        const signingIn = ref(false);
        const invalidLogin = ref(false);
        const loginPayload = reactive({
            email: '',
            password: ''
        });

        const doLogin = async () => {
            signingIn.value = true;
            console.log(loginPayload);
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
