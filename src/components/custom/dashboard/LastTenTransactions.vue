<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        {{ $t('labels.lastTenTransactions') }}
                        <!-- {{ $filters.currencyUSD(20) }} -->
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
                                class="table table-striped table-hover table-bordered"
                                id="usersTable"
                            >
                                <thead>
                                    <tr>
                                        <th>Ref ID</th>
                                        <th>Customer Name</th>
                                        <th>Proposal No.</th>
                                        <th>Amount</th>
                                        <th>Fund Type</th>
                                        <th>Payment Type</th>
                                        <th>Channel</th>
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
                                                :to="`/transactions/details/${transaction.referenceID}`"
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
                                        <td>{{ transaction.proposalNo }}</td>
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
                                        <td>{{ transaction.channel }}</td>
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
                                        <!-- href="{{ webBaseUrl }}/transactions/details?refId={{transaction.referenceID}}" -->
                                        <td>
                                            <router-link
                                                target="_blank"
                                                :to="`/transactions/details/${transaction.referenceID}`"
                                                class=" btn btn-sm btn-outline-success"
                                                ><i class="fa fa-book-open"></i>
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
</template>
<script lang="ts">
import {helper} from '@/utils/helpers';
import {useI18n} from 'vue-i18n';

export default {
    name: 'LastTenTransactions',
    props: {
        transactions: Array
    },
    setup() {
        const {n} = useI18n();
        const webBaseUrl = helper.getBaseUrl();
        return {
            webBaseUrl,
            n
        };
    }
};
</script>
