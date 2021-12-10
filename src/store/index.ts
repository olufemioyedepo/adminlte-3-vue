import {createStore} from 'vuex';
import authModule from './auth';
import uiModule from './ui';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        auth: authModule,
        ui: uiModule
    },
    plugins: [createPersistedState()]
});
