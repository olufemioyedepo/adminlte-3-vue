<template>
    <div>
        <table id="tableTemplate" class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th v-for="header in columnHeaders" :key="header">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in rowItems" :key="item">
                    <td>{{ item.firstName }} {{ item.lastName }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.birthDate }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.company }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import $ from 'jquery';
import {onMounted} from 'vue';

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
// import '../../../dist/js/adminlte.min.js';

export default {
    name: 'CustomDatatable',
    props: {
        columnHeaders: Array,
        rowNames: Array,
        rowItems: Array
    },
    setup() {
        const initTable = () => {
            $(function () {
                $('#tableTemplate')
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
            initTable();
        });

        return {
            initTable
        };
    }
};
</script>
