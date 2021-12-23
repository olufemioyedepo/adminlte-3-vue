import instance from '@/utils/axios';
import {Transaction} from '@/interfaces/app/transaction';
import {ref} from 'vue';
import $ from 'jquery';

const transactions = ref([] as Transaction[]);

export const  fetchProducts = async () => {
    const response = await instance.get("/api/products");
    return response;
}

export const getInitialTransactions = async (payload: any) => {
    await instance
        .post('portal/transactions', payload)
        .then((res) => {
            transactions.value = res.data.data;
            console.log('response: ', res);
            //initTable();

            return res;
        })
        .catch((err) => {
            console.log('error: ', err);
        });
};

export const initTable = () => {
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