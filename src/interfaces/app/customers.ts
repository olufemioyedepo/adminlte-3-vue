export interface CustomersResponse {
    code:    number;
    success: boolean;
    message: string;
    data:    CustomerInfoResponse[];
}

export interface CustomerInfoResponse {
    id:               number;
    clientNo:         number;
    bvn:              string;
    customerName:     string;
    email:            string;
    mobileNo:         string;
    registrationDate: string;
}
