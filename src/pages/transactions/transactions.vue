<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Blank Page</h1>
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
    <section class="content">
        <div class="container-fluid">
            <!-- <h4>{{ hello }}</h4>
            <Button label="Submit" icon="pi pi-check" iconPos="right" /> -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">Setup more small isi</div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table
                                    class="
                                        table
                                        table-striped
                                        table-hover
                                        table-bordered
                                    "
                                    id="usersTable"
                                >
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="user in usersData"
                                            :key="user.id"
                                        >
                                            <td>
                                                <span v-if="user.name.title"
                                                    >{{
                                                        user.name.title
                                                    }}.</span
                                                >
                                                {{ user.name.first }}
                                                {{ user.name.last }}
                                            </td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.phone }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <custom-datatable
                                    :rowItems="records"
                                    :rowNames="rowColumns"
                                    :columnHeaders="colHeaders"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import $ from 'jquery';
import instance from '@/utils/axios';
//import Button from 'primevue/button';

import {onMounted, ref} from 'vue';
import CustomDatatable from '@/components/custom/Datatable.vue';
import usersFromJson from '@/assets/users.json';
export default {
    name: 'Transactions',
    components: {
        CustomDatatable
        //Button
    },
    setup() {
        console.log(instance);

        const hello = 'Test this!';
        const records = ref([]);
        const usersData = ref([]);
        const colHeaders = ref([
            'Full Name',
            'Phone',
            'Email',
            'Birth Date',
            'Address',
            'Company'
        ]);
        const rowColumns = ref([
            'firstName',
            'lastName',
            'phone',
            'email',
            'birthdate',
            'address',
            'company'
        ]);

        const loadData = async () => {
            await instance
                .get('?results=100')
                .then((res) => {
                    console.log('res: ', res);
                    usersData.value = res.data.results;
                    console.log(usersData.value);
                    $(function () {
                        $('#usersTable')
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
                                    'print',
                                    'colvis'
                                ]
                            })
                            .buttons()
                            .container()
                            .appendTo('#usersTable_wrapper .col-md-6:eq(0)');
                    });
                })
                .catch((err) => {
                    console.log('err: ', err);
                });
        };

        onMounted(() => {
            loadData();
            records.value = usersFromJson;
            console.log(records.value);
        });

        return {
            hello,
            loadData,
            usersData,
            colHeaders,
            records,
            rowColumns
        };
    }
};
</script>
