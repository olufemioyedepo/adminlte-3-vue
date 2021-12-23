<template>
    <Toast />
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="mb-2 row">
                <div class="col-sm-6">
                    <h1 class="m-0">Transactions</h1>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="ml-1 row">
                <div class="col col-lg-2 col-xl-2 col-12">
                    <div class="form-group">
                        <label>From Date:</label>
                        <input
                            type="date"
                            v-model="payload.StartDate"
                            class="
                                form-control
                                ng-pristine ng-untouched ng-valid
                            "
                        />
                    </div>
                </div>

                <div class="col col-lg-2 col-xl-2 col-12">
                    <div class="form-group">
                        <label>To Date:</label>
                        <input
                            type="date"
                            v-model="payload.EndDate"
                            class="
                                form-control
                                ng-pristine ng-untouched ng-valid
                            "
                        />
                    </div>
                </div>

                <div class="col col-lg-1 col-xl-1 col-12">
                    <div class="form-group">
                        <label>&nbsp;&nbsp;&nbsp;</label>
                        <button
                            class="btn btn-outline-success btn-block btn-sm"
                            @click="filterTransactions()"
                            :disabled="filtering === true"
                        >
                            <div v-if="filtering === false">
                                <i class="fas fa-filter"></i> Filter
                            </div>
                            <div v-if="filtering === true">
                                <div
                                    class="spinner-border spinner-border-sm"
                                ></div>
                                &nbsp;&nbsp; Processing... &nbsp;&nbsp;&nbsp;
                            </div>
                        </button>
                    </div>
                </div>
                <div class="ml-auto mr-3">
                    <button
                        class="btn btn-success btn-block btn-sm"
                        @click="exportDataToExcel()"
                        :disabled="transactionsForExport.length === 0"
                        v-if="exportingTransactions === false"
                    >
                        <i class="fas fa-download"></i> Export Transactions
                    </button>
                    <button
                        class="btn btn-success btn-block btn-sm"
                        :disabled="true"
                        v-if="exportingTransactions === true"
                    >
                        <div class="spinner-border spinner-border-sm"></div>
                        &nbsp;&nbsp; Processing... &nbsp;&nbsp;&nbsp;
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <!-- Transactions from  {{ initialStartDate }} to
                            {{ initialEndDate }} -->
                            Showing Transactions from
                            <strong
                                >{{
                                    $filters.formatDateShort(payload.StartDate)
                                }}
                            </strong>
                            to
                            <strong>
                                {{ $filters.formatDateShort(payload.EndDate) }}
                            </strong>
                            <div class="card-tools">
                                <button
                                    type="button"
                                    class="btn btn-tool"
                                    data-card-widget="collapse"
                                    title="Collapse"
                                >
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-tool"
                                    data-card-widget="remove"
                                    title="Remove"
                                >
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table
                                    class="
                                        table
                                        table-striped
                                        table-hover
                                        table-bordered
                                    "
                                    id="tableTemplate"
                                >
                                    <thead>
                                        <tr>
                                            <th>Ref ID</th>
                                            <th>Customer Name</th>
                                            <th>Proposal No.</th>
                                            <th>Amount</th>
                                            <th>Fund Type</th>
                                            <th>Payment Type</th>
                                            <th>Category</th>
                                            <th>Trans Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="transaction in transactions"
                                            :key="transaction.id"
                                        >
                                            <td>
                                                <router-link
                                                    target="_blank"
                                                    :to="`/transaction/details/${transaction.referenceID}`"
                                                >
                                                    {{
                                                        transaction.referenceID
                                                    }}</router-link
                                                >
                                            </td>
                                            <td>
                                                {{
                                                    $filters.toUpperCase(
                                                        transaction.customerName
                                                    )
                                                }}
                                            </td>
                                            <td>
                                                {{ transaction.proposalNo }}
                                            </td>
                                            <td>
                                                {{
                                                    n(
                                                        transaction.amount,
                                                        'currency',
                                                        'en-NG'
                                                    )
                                                }}
                                            </td>
                                            <td>{{ transaction.fund }}</td>
                                            <td>{{ transaction.payType }}</td>
                                            <td>{{ transaction.category }}</td>
                                            <td>
                                                <small>
                                                    {{
                                                        $filters.formatDate(
                                                            transaction.transactionDate
                                                        )
                                                    }}
                                                </small>
                                            </td>
                                            <td>
                                                <router-link
                                                    target="_blank"
                                                    :to="`/transaction/details/${transaction.referenceID}`"
                                                    class="
                                                        btn
                                                        btn-sm
                                                        btn-outline-success
                                                    "
                                                    ><i
                                                        class="fa fa-book-open"
                                                    ></i>
                                                    View Details</router-link
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</template>
<script lang="ts">
import $ from 'jquery';
import instance from '@/utils/axios';
import {onMounted, reactive, ref} from 'vue';
import moment from 'moment';
import {Transaction} from '@/interfaces/app/transaction';
import {TransactionForExport} from '@/interfaces/app/transactionforexport';
import {useI18n} from 'vue-i18n';
import {useStore} from 'vuex';
import {useToast} from 'primevue/usetoast';
import Toast from 'primevue/toast';
import {exportToExcel, getTransactionsExtractFileName} from '@/utils/helpers';
//import {getInitialTransactions, initTable} from '@/services/api/api';

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

export default {
    name: 'CustomerTransactions',
    components: {
        Toast
    },
    title: 'Transactions',
    setup() {
        const headerCols = [
            'id',
            'ReferenceID',
            'CategoryID',
            'ProposalNo',
            'ClientNo',
            'CustomerName',
            'Fund',
            'Amount',
            'AmountPaid',
            'PayType',
            'PayStatusCode',
            'PayStatus',
            'TransactionDate',
            'Channel',
            'PartnerID'
        ];
        const {n} = useI18n();
        const clientNo = ref({} as number);
        const sheets = [{name: 'SheetOne', data: [{c: 2}]}];
        let filtering = ref(false);
        const exportingTransactions = ref(false);
        const transactions = ref([] as Transaction[]);
        const transactionsForExport = ref([] as TransactionForExport[]);
        const store = useStore();
        const toast = useToast();

        let initialStartDate = moment();
        let initialEndDate = moment();
        initialStartDate.add(-15, 'days');

        var payload = reactive({
            ClientNo: 19426,
            StartDate: initialStartDate,
            EndDate: initialEndDate
        });

        const showSuccess = () => {
            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Transactions loaded successfully!',
                life: 3000
            });
        };

        onMounted(() => {
            clientNo.value = store.state.auth.userinfo?.clientNo;
            payload.ClientNo = clientNo.value;

            console.log(payload);
            getInitialTransactions(payload);
        });

        const toggleFilterState = () => {
            filtering.value = !filtering.value;
        };

        const getInitialTransactions = async (payload: any) => {
            loadTransactionsForExport();
            await instance
                .post('portal/transactions', payload)
                .then((res) => {
                    transactions.value = res.data.data;
                    console.log('response: ', res);
                    initTable();
                    showSuccess();
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        };

        const exportDataToExcel = () => {
            exportToExcel(
                transactionsForExport.value,
                headerCols,
                getTransactionsExtractFileName(
                    payload.StartDate,
                    payload.EndDate
                ),
                'sheet1'
            );
        };

        const filterTransactions = async () => {
            loadTransactionsForExport();
            toggleFilterState();

            console.log(payload);
            await instance
                .post('portal/transactions', payload)
                .then((res) => {
                    transactions.value = res.data.data;
                    console.log('response: ', res);

                    destroyTable();
                    initTable();
                    toggleFilterState();
                    showSuccess();
                })
                .catch((err) => {
                    console.log('error: ', err);
                    toggleFilterState();
                });
        };

        const loadTransactionsForExport = async () => {
            await instance
                .post('portal/transactionsforexport', payload)
                .then((res) => {
                    transactionsForExport.value = res.data.data;
                    console.log('transactions for export: ', res);
                })
                .catch((err) => {
                    console.log(
                        'could not load transactions for export: ',
                        err
                    );
                });
        };

        const destroyTable = () => {
            ($('#tableTemplate') as any).DataTable().destroy();
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

        return {
            initialStartDate,
            initialEndDate,
            payload,
            getInitialTransactions,
            transactions,
            n,
            filtering,
            exportingTransactions,
            filterTransactions,
            destroyTable,
            showSuccess,
            loadTransactionsForExport,
            sheets,
            exportDataToExcel,
            transactionsForExport
        };
    }
};
</script>
