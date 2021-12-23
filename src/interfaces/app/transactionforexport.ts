export interface TransactionForExport {
    code:    number;
    success: boolean;
    message: string;
    data:    TransactionsForExportResponse[];
}

export interface TransactionsForExportResponse {
    id:              number;
    referenceID:     string;
    categoryID:      number;
    proposalNo:      string;
    clientNo:        string;
    customerName:    string;
    fund:            string;
    amount:          number;
    amountPaid:      number;
    payType:         string;
    payStatusCode:   string;
    payStatus:       string;
    transactionDate: string;
    channel:         number;
    partnerID:       null;
}

export enum Fund {
    MoneyMarketFund = "Money Market Fund",
}

export enum PayStatus {
    Initiated = "initiated",
    Success = "success",
}

export enum PayStatusCode {
    Empty = "",
    The00 = "00",
}

export enum PayType {
    FundSubscription = "Fund Subscription",
}
