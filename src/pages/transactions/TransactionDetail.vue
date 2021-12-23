<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="mb-2 row">
                <div class="col-sm-6">
                    <h4
                        class="content-title"
                        v-if="
                            transactionStatus.returnCode === '00' ||
                            transactionStatus.returnCode === '01'
                        "
                    >
                        {{ $filters.toUpperCase(transaction.customerName) }}:
                        {{ transaction.proposalNo }}
                        <span class="text-success"
                            >(₦{{
                                Number(transaction.amount).toLocaleString()
                            }})</span
                        >
                    </h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="/">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item active">
                            Transaction Details Page
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="page">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card card-default">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info"></i>
                                    Transaction Details
                                </h3>
                            </div>
                            <!-- /.card-header -->
                            <div
                                class="card-body"
                                v-if="transactionStatus.returnCode === '03'"
                            >
                                <div class="text-center text-danger">
                                    Transaction with ID:
                                    <strong>{{ referenceId }}</strong> not
                                    found!
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Customer</label>
                                            <div
                                                class="form-control"
                                                style="
                                                    background-color: #e9ecef;
                                                "
                                            >
                                                <span
                                                    v-if="
                                                        transaction.customerName
                                                    "
                                                >
                                                    {{
                                                        $filters.toUpperCase(
                                                            transaction.customerName
                                                        )
                                                    }}
                                                </span>
                                                ({{ transaction.clientNo }})
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Reference ID</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="
                                                    transaction.referenceID
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Amount</label>
                                            <div
                                                class=" form-control font-weight-bold text-success"
                                                style="
                                                    background-color: #e9ecef;
                                                "
                                            >
                                                ₦{{
                                                    Number(
                                                        transaction.amount
                                                    ).toLocaleString()
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Proposal No.</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="transaction.proposalNo"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Fund</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="transaction.fund"
                                            />
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Category</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="transaction.category"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Payment Type</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="transaction.payType"
                                            />
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Payment Status</label>
                                            <div
                                                class=" form-control font-weight-bold"
                                                style="
                                                    background-color: #e9ecef;
                                                "
                                            >
                                                <span
                                                    class="text-success"
                                                    v-if="
                                                        transaction.payStatus ===
                                                        'success'
                                                    "
                                                    ><i
                                                        class=" fas fa-check-circle"
                                                    ></i>
                                                    Successful</span
                                                >
                                                <span
                                                    class="text-warning"
                                                    v-if="
                                                        transaction.payStatus !==
                                                        'success'
                                                    "
                                                    ><i
                                                        class="fas fa-info"
                                                        style="color: #92720a"
                                                    ></i>
                                                    {{
                                                        transaction.payStatus
                                                    }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Transaction Status</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                disabled
                                                v-model="
                                                    transactionStatus.message
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label>Transaction Date</label>
                                            <div
                                                class="form-control"
                                                style="
                                                    background-color: #e9ecef;
                                                "
                                            >
                                                {{
                                                    $filters.formatDate(
                                                        transaction.transactionDate
                                                    )
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-12">
                                        <div class="form-group">
                                            <label>Pay Memo</label>
                                            <textarea
                                                class="form-control"
                                                disabled
                                                rows="4"
                                                v-model="transaction.payMemo"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import instance from '@/utils/axios';
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {TransactionInfo} from '@/interfaces/app/transaction-info';
import {TransactionStatus} from '@/interfaces/app/transaction-info';

export default {
    name: 'TransactionDetail',
    title: 'Transaction Details',
    setup() {
        const transactionId = ref({} as string);
        const clientNo = ref({} as number);
        const transaction = ref({} as TransactionInfo);
        const transactionStatus = ref({} as TransactionStatus);
        const route = useRoute();
        const store = useStore();

        const getTransactionDetail = async (
            transactionId: string,
            clientNo: number
        ) => {
            const payload = {
                ReferenceId: transactionId,
                ClientNo: clientNo
            };
            await instance
                .post('portal/transactioninfo', payload)
                .then((res) => {
                    console.log('response: ', res);
                    transaction.value = res.data.data;
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        };

        const getTransactionStatus = async (
            transactionId: string,
            clientNo: number
        ) => {
            const payload = {
                ReferenceId: transactionId,
                ClientNo: clientNo
            };
            await instance
                .post('portal/transactionstatus', payload)
                .then((res) => {
                    transactionStatus.value = res.data.data;
                    console.log('response: ', res);
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        };

        onMounted(() => {
            clientNo.value = store.state.auth.userinfo?.clientNo;
            const refIdArray = route.params.referenceId;
            console.log(refIdArray);
            transactionId.value = refIdArray.toString();

            getTransactionDetail(transactionId.value, clientNo.value);
            getTransactionStatus(transactionId.value, clientNo.value);
        });
        return {
            getTransactionDetail,
            getTransactionStatus,
            transactionStatus,
            transaction
        };
    }
};
</script>
