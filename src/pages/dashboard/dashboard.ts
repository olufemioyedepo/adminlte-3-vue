import instance from '@/utils/axios';
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import {DashboardDataResponse} from '@/interfaces/app/dashboard-data';
import {Transaction} from '@/interfaces/app/transaction';
import {TotalBalance} from '@/interfaces/app/totalbalance';
import {PerformanceChartResponse} from '@/interfaces/app/performancechart';
import LastTenTransactions from '@/components/custom/dashboard/LastTenTransactions.vue';
import PerformanceChart from '@/components/custom/dashboard/PerformanceChart.vue';

export default {
    name: 'Dashboard',
    components: {
        LastTenTransactions,
        PerformanceChart
    },
    setup() {
        const appStore = useStore();
        const userinfo = computed(function () {
            return appStore.state.auth.userinfo;
        });
        const dashboardData = ref({} as DashboardDataResponse);
        const performanceChartResponse = ref({} as PerformanceChartResponse);
        const totalBalance = ref({} as TotalBalance);
        const transactions = ref([] as Transaction[]);

        const getDashboardData = async () => {
            await instance
                .get(`portal/dashboard/${userinfo.value.clientNo}`)
                .then((res) => {
                    const response = res;
                    dashboardData.value = response.data.data;
                    console.log(dashboardData.value);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const getTotalBalances = async () => {
            await instance
                .get(`portal/totalbalance/${userinfo.value.clientNo}`)
                .then((res) => {
                    const response = res;
                    totalBalance.value = response.data.data;
                    console.log(totalBalance.value);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const getTransanctions = async () => {
            await instance
                .get(`portal/lasttentransactions/${userinfo.value.clientNo}`)
                .then((res) => {
                    const response = res;
                    transactions.value = response.data.data;
                    console.log(transactions.value);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const getPerformanceData = async () => {
            await instance
                .get(`portal/performancedata/${userinfo.value.clientNo}`)
                .then((res) => {
                    const response = res;
                    performanceChartResponse.value = response.data.data;
                    console.log(performanceChartResponse.value);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        const aminateFigures = () => {
            const counters = document.querySelectorAll(".counter");

            counters.forEach((element) => {
                const counter = element as HTMLElement;

                counter.innerText = "0";
                const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / 200;
                if (count < target) {
                  counter.innerText = `${Math.ceil(count + increment)}`;
                  setTimeout(updateCounter, 1);
                } else counter.innerText = target.toString();
              };
              updateCounter();
            });
            
        }

        onMounted(() => {
            getDashboardData();
            getTransanctions();
            getTotalBalances();
            getPerformanceData();
        })

        return {
            userinfo,
            dashboardData,
            totalBalance,
            transactions,
            performanceChartResponse
        };
    }
}