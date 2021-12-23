<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="mb-2 row">
                <div class="col-sm-6">
                    <h1>Customers</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Blank Page</li>
                    </ol>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <!-- Default box -->
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Title</h3>

                    <div class="card-tools">
                        <button
                            type="button"
                            class="btn btn-tool"
                            data-widget="collapse"
                            data-toggle="tooltip"
                            title="Collapse"
                        >
                            <i class="fa fa-minus"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-tool"
                            data-widget="remove"
                            data-toggle="tooltip"
                            title="Remove"
                        >
                            <i class="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <table
                        id="tableTemplate"
                        class="table table-bordered table-striped"
                    >
                        <thead>
                            <tr>
                                <th>BVN</th>
                                <th>Client No.</th>
                                <th>Customer Name</th>
                                <th>Email Address</th>
                                <th>Mobile No.</th>
                                <th>Registered</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" :key="customer">
                                <td>{{ customer.bvn }}</td>
                                <td>{{ customer.clientNo }}</td>
                                <td>
                                    <router-link
                                        target="_blank"
                                        :to="`/customer/details/${customer.id}`"
                                    >
                                        {{
                                            $filters.toUpperCase(
                                                customer.customerName
                                            )
                                        }}</router-link
                                    >
                                </td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.mobileNo }}</td>
                                <td>
                                    {{
                                        $filters.formatDate(
                                            customer.registrationDate
                                        )
                                    }}
                                </td>
                                <td>
                                    <router-link
                                        target="_blank"
                                        class="btn btn-sm btn-outline-success"
                                        :to="`/customer/details/${customer.id}`"
                                    >
                                        View Details</router-link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
</template>
<script lang="ts">
import $ from 'jquery';
import instance from '@/utils/axios';
import {onMounted, ref} from 'vue';
import {useStore} from 'vuex';

import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../../../node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-buttons/js/dataTables.buttons.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-buttons/js/buttons.bootstrap4.min.js';
import '../../../node_modules/admin-lte/plugins/jszip/jszip.min.js';
import '../../../node_modules/admin-lte/plugins/pdfmake/pdfmake.min.js';
import '../../../node_modules/admin-lte/plugins/pdfmake/vfs_fonts.js';
import '../../../node_modules/admin-lte/plugins/datatables-buttons/js/buttons.html5.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-buttons/js/buttons.print.min.js';
import '../../../node_modules/admin-lte/plugins/datatables-buttons/js/buttons.colVis.min.js';

import {CustomersResponse} from '@/interfaces/app/customers';
export default {
    name: 'CustomersList',
    title: 'Customers',
    setup() {
        const store = useStore();
        const clientNo = ref({} as number);
        const customers = ref([] as CustomersResponse[]);

        const getCustomers = async () => {
            instance
                .get(`portal/customers/${clientNo.value}`)
                .then((res) => {
                    customers.value = res.data.data;
                    console.log('response: ', customers.value);
                    initTable();
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        };
        const initTable = () => {
            $(function () {
                ($('#tableTemplate') as any)
                    .DataTable({
                        paging: true,
                        lengthChange: true,
                        searching: true,
                        pageLength: 25,
                        //ordering: true,
                        info: true,
                        aaSorting: [],
                        //autoWidth: true,
                        responsive: true,
                        buttons: [
                            'copy',
                            'csv',
                            'excel',
                            'pdf',
                            'print'
                            // 'colvis'
                        ]
                    })
                    .buttons()
                    .container()
                    .appendTo('#tableTemplate_wrapper .col-md-6:eq(0)');

                $('.dt-buttons').addClass('btn-group flex-wrap');
                $('.dt-button').addClass('btn btn-secondary');
            });
        };
        onMounted(() => {
            clientNo.value = store.state.auth.userinfo?.clientNo;

            getCustomers();
        });
        return {
            customers,
            getCustomers
        };
    }
};
</script>
