import XLSX from 'xlsx';
import $ from 'jquery';
import moment from 'moment';

export const calculateWindowSize = (windowWidth: number): string => {
    if (windowWidth >= 1200) {
        return 'lg';
    }
    if (windowWidth >= 992) {
        return 'md';
    }
    if (windowWidth >= 768) {
        return 'sm';
    }
    return 'xs';
};

export const getTransactionsExtractFileName = (startDate: any, endDate: any): string => {

    if (typeof startDate == "string") {
        const sYear = startDate.substring(0, 4);
        const sMonth = startDate.substring(5, 7);
        const sDay = startDate.substring(8, 10);

        const eYear = endDate.substring(0, 4);
        const eMonth = endDate.substring(5, 7);
        const eDay = endDate.substring(8, 10);

        const fileName = `transactions_${sYear}${sMonth}${sDay}_${eYear}${eMonth}${eDay}`;

        return fileName;
    }

    const startYear = startDate.weekYear();
    const startMonth = (startDate.month() + 1).toString().length === 1 ? `0${(startDate.month() + 1)}` : (startDate.month() + 1);
    const startDay = startDate.date().toString().length === 1 ? `0${(startDate.date())}` : startDate.date();

    const endYear = endDate.weekYear();
    const endMonth = (endDate.month() + 1).toString().length === 1 ? `0${(endDate.month() + 1)}` : (endDate.month() + 1);
    const endDay = endDate.date().toString().length === 1 ? `0${(endDate.date())}` : endDate.date();

    const fileName = `transactions_${startYear}${startMonth}${startDay}_${endYear}${endMonth}${endDay}`;
    return fileName;
}

export const exportToExcel = (
    data: any[],
    headerCols: string[],
    fileName: string,
    sheetName: string
) => {
    const createXLSLFormatObj = [];
    const xlsHeader = headerCols;

    /* XLS Rows Data */
    const xlsRows = data;

    createXLSLFormatObj.push(xlsHeader);
    $.each(xlsRows, function (index, value) {
        const innerRowData: any[] = [];
        //$("tbody").append('<tr><td>' + value.EmployeeID + '</td><td>' + value.FullName + '</td></tr>');
        $.each(value, function (ind, val) {
            innerRowData.push(val);
        });
        createXLSLFormatObj.push(innerRowData);
    });

    /* File Name */
    const filename = fileName + '.xlsx';

    /* Sheet Name */
    const ws_name = sheetName; //"FreakySheet";

    if (typeof console !== 'undefined') console.log(new Date());
    const wb = XLSX.utils.book_new(),
        ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);

    /* Write workbook and Download */
    if (typeof console !== 'undefined') console.log(new Date());
    XLSX.writeFile(wb, filename);
    if (typeof console !== 'undefined') console.log(new Date());
}

export class helper {
    static getBaseUrl = () : string => {
        const baseUrl = process.env.NODE_ENV === 'development' ? "https://localhost:5090/" : "https://axamansard.com/partnerapp/";
        return baseUrl;
    }
}
