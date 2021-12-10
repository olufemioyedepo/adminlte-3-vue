<template>
    <div class="row">
        <div class="col col-lg-12 col-xl-12 col-12">
            <div class="card">
                <div class="card-header">
                    {{ $t('labels.yearToDatePerformance') }}
                </div>
                <div class="card-body">
                    <Chart type="bar" :data="PerformanceChartData" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Chart from 'primevue/chart';

export default {
    name: 'PerformanceChart',
    components: {
        Chart
    },
    props: {
        PerformanceChartData: Object
    },
    data() {
        return {};
    },
    setup() {
        return {
            basicData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#42A5F5',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: '#9CCC65',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }
        };
    }
};
</script>
