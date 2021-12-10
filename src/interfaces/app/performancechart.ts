export interface PerformanceChartResponse {
    code:    number;
    success: boolean;
    message: string;
    data:    PerformanceChartData;
}

export interface PerformanceChartData {
    labels:   string[];
    datasets: PerformanceChartDataset[];
}

export interface PerformanceChartDataset {
    label:           string;
    backgroundColor: string;
    data:            number[];
}