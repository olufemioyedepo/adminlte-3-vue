export interface TransactionInfo {
    code:    number;
    success: boolean;
    message: string;
    data:    TransactionInfoData;
}

export interface TransactionInfoData {
    id:                   number;
    referenceID:          string;
    categoryID:           null;
    proposalNo:           string;
    category:             string;
    clientNo:             string;
    customerName:         string;
    fund:                 string;
    amount:               number;
    amountPaid:           null;
    payType:              string;
    payStatusCode:        string;
    payStatus:            string;
    transactionDate:      string;
    payMemo:              string;
    payGateway:           null;
    transIDUsed:          boolean;
    proceededToPayment:   boolean;
    mailSent:             boolean;
    mailSentDate:         string;
    updated:              null;
    channel:              string;
    partnerID:            number;
    rePushed:             boolean;
    isTest:               null;
    pushedToSmartInflows: null;
    emailAddress:         string;
    mobileNo:             string;
}

export interface TransactionStatus {
    code:    number;
    success: boolean;
    message: string;
    data:    TransactionStatuData;
}

export interface TransactionStatuData {
    isSuccessful:    boolean;
    message:         string;
    returnCode:      string;
    returnedObject:  Object;
    returnedObject2: Object;
}