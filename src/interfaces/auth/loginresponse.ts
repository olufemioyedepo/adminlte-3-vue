export interface LoginResponse {
    code:    number;
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    pixelAuthResposeContent: PixelAuthResposeContent;
    token:                   string;
}

export interface PixelAuthResposeContent {
    partnerId:    number;
    partnerName:  string;
    uuid:         string;
    name:         string;
    email:        string;
    mobileNumber: string;
    customerNo:   null;
    clientNo:     string;
    rsapin:       null;
    enrolleeNo:   null;
    noOfAccounts: number;
    subAccounts:  null;
}