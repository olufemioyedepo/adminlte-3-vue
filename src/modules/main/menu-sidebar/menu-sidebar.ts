import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import MenuItem from '@/components/menu-item/menu-item.vue';

@Options({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem
    }
})
export default class MenuSidebar extends Vue {
    public menu = MENU;
    get userinfo(): IUser {
        return this.$store.getters['auth/userinfo'];
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        icon: 'fas fa-chart-area',
        path: '/'
    },
    // {
    //     name: 'Blank',
    //     path: '/blank'
    // },
    // {
    //     name: 'Transactionz',
    //     icon: 'fas fa-book',
    //     path: '/transactions'
    // },
    {
        name: 'Customers',
        icon: 'fas fa-users',
        path: '/customers'
    },
    {
        name: 'Transactions',
        icon: 'fas fa-calculator',
        path: '/customer/transactions',
    },
    // {
    //     name: 'labels.mainMenu',
    //     children: [
    //         {
    //             name: 'labels.subMenu',
    //             path: '/sub-menu-1'
    //         },

    //         {
    //             name: 'labels.blank',
    //             path: '/sub-menu-2'
    //         }
    //     ]
    // }
];
