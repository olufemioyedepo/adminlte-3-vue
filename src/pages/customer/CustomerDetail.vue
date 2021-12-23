<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="mb-2 row">
                <div class="col-sm-6">
                    <h4 class="content-title">Customer Details</h4>
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
                    <div class="col col-lg-8 col-xl-8 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title"></h3>

                                <div class="card-tools">
                                    <button
                                        type="button"
                                        class="btn btn-tool"
                                        data-card-widget="collapse"
                                        title="Collapse"
                                    >
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="col-sm-12">
                                    <div
                                        class=" card card-primary card-outline card-outline-tabs"
                                    >
                                        <div
                                            class="p-0 card-header border-bottom-0"
                                        >
                                            <ul
                                                class="nav nav-tabs"
                                                id="custom-tabs-four-tab"
                                                role="tablist"
                                            >
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link active"
                                                        id="custom-tabs-four-home-tab"
                                                        data-toggle="pill"
                                                        href="#custom-tabs-four-home"
                                                        role="tab"
                                                        aria-controls="custom-tabs-four-home"
                                                        aria-selected="true"
                                                        >Personal Information
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link"
                                                        id="custom-tabs-four-profile-tab"
                                                        data-toggle="pill"
                                                        href="#custom-tabs-four-profile"
                                                        role="tab"
                                                        aria-controls="custom-tabs-four-profile"
                                                        aria-selected="false"
                                                        >Next Of Kin
                                                        Information</a
                                                    >
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link"
                                                        id="custom-tabs-four-messages-tab"
                                                        data-toggle="pill"
                                                        href="#custom-tabs-four-messages"
                                                        role="tab"
                                                        aria-controls="custom-tabs-four-messages"
                                                        aria-selected="false"
                                                        >Bank Information</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div
                                                class="tab-content"
                                                id="custom-tabs-four-tabContent"
                                            >
                                                <div
                                                    class=" tab-pane fade show active"
                                                    id="custom-tabs-four-home"
                                                    role="tabpanel"
                                                    aria-labelledby="custom-tabs-four-home-tab"
                                                >
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <strong
                                                                >Account Type: </strong
                                                            ><span>{{
                                                                customerInfo.accountType
                                                            }}</span
                                                            ><br /><br />
                                                            <strong
                                                                >Title:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.title
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Surname:
                                                            </strong>
                                                            <span
                                                                class=" text-navy"
                                                                id="spSurname"
                                                                >{{
                                                                    customerInfo.surName
                                                                }}</span
                                                            >
                                                            <br />
                                                            <strong
                                                                >First name:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.firstName
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Middle Name:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    customerInfo.middleName
                                                                }}
                                                            </span>
                                                            <span
                                                                v-if="
                                                                    customerInfo.middleName ===
                                                                    null
                                                                "
                                                            >
                                                                N/A
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Mothers
                                                                MaidenName:
                                                            </strong>
                                                            <span
                                                                >{{
                                                                    customerInfo.mothersMaidenName
                                                                }}
                                                            </span>
                                                            <span
                                                                v-if="
                                                                    customerInfo.mothersMaidenName ===
                                                                    null
                                                                "
                                                            >
                                                                N/A
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Occupation:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.occupation
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Resident Permit
                                                                Number:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    customerInfo.residentPermitNo
                                                                }}</span
                                                            >
                                                            <span
                                                                v-if="
                                                                    customerInfo.residentPermitNo ===
                                                                    null
                                                                "
                                                            >
                                                                N/A
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Country:
                                                            </strong>
                                                            <span
                                                                >{{
                                                                    customerInfo.country
                                                                }}
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >State:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    customerInfo.state
                                                                }}</span
                                                            >
                                                            <br />
                                                            <strong
                                                                >Residential
                                                                Address:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    customerInfo.address
                                                                }}
                                                            </span>
                                                            <br />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <strong
                                                                >Mobile No:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.mobileNo
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Email Address: </strong
                                                            ><span>{{
                                                                customerInfo.email
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Nationality:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.nationality
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Date of Birth:
                                                            </strong>
                                                            <span>{{
                                                                customerInfo.dob
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Country Of
                                                                Birth:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    customerInfo.cob
                                                                }}
                                                            </span>
                                                            <br />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="tab-pane fade"
                                                    id="custom-tabs-four-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="custom-tabs-four-profile-tab"
                                                >
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <strong
                                                                >Name: </strong
                                                            ><span>{{
                                                                customerInfo.nokName
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Address: </strong
                                                            ><span
                                                                >{{
                                                                    customerInfo.nokAddress
                                                                }}
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Phone: </strong
                                                            ><span>{{
                                                                customerInfo.nokPhone
                                                            }}</span>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <strong
                                                                >Email: </strong
                                                            ><span>{{
                                                                customerInfo.nokEmail
                                                            }}</span>
                                                            <br />
                                                            <strong
                                                                >Relationship: </strong
                                                            ><span>{{
                                                                customerInfo.nokRelationship
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="tab-pane fade"
                                                    id="custom-tabs-four-messages"
                                                    role="tabpanel"
                                                    aria-labelledby="custom-tabs-four-messages-tab"
                                                >
                                                    <h4>
                                                        <strong>BVN: </strong>
                                                        <span>
                                                            {{
                                                                customerInfo.bvn
                                                            }}
                                                        </span>
                                                    </h4>
                                                    <!-- ngRepeat: bank in customerInfo.prospectBanks -->
                                                    <div
                                                        v-for="bank in customerInfo.prospectBanks"
                                                        :key="bank"
                                                        class="ng-scope"
                                                    >
                                                        <div class="col-sm-12">
                                                            <strong
                                                                >Bank Name:
                                                            </strong>
                                                            <span
                                                                >{{
                                                                    bank.bankName
                                                                }}
                                                            </span>
                                                            <span
                                                                v-if="
                                                                    bank.bankName ===
                                                                    null
                                                                "
                                                                >N/A
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Account Number:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    bank.accountNumber
                                                                }}
                                                            </span>
                                                            <br />
                                                            <strong
                                                                >Account Name:
                                                            </strong>
                                                            <span>
                                                                {{
                                                                    bank.accountName
                                                                }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.card -->
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                            <!-- /.card-footer-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import instance from '@/utils/axios';
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import {CustomerInfo} from '@/interfaces/app/customer-info';

export default {
    name: 'CustomerDetail',
    setup() {
        const prospectId = ref({} as number);
        const customerInfo = ref({} as CustomerInfo);
        const route = useRoute();

        const getCustomerInfo = async (prospectId: number) => {
            await instance
                .get(`portal/customerInfo/${prospectId}`)
                .then((res) => {
                    console.log('response: ', res);
                    customerInfo.value = res.data.data;
                })
                .catch((err) => {
                    console.log('error: ', err);
                });
        };

        onMounted(() => {
            const paramsArray = route.params.prospectId;
            console.log(paramsArray);
            prospectId.value = Number(paramsArray.toString());
            getCustomerInfo(prospectId.value);
        });
        return {
            getCustomerInfo,
            customerInfo,
            prospectId
        };
    }
};
</script>
