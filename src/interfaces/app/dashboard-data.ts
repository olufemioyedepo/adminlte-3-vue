export interface DashboardDataResponse {
    code:    number;
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    customersCount:    number;
    transactionsCount: number;
    totalBalance:      number;
}