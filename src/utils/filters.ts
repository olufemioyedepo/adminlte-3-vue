import moment from 'moment';

const filters = {
    currencyUSD(value: number) {
        return '$' + value;
    },
    toUpperCase(value: string) {
        return value.toUpperCase();
    },
    formatDate(value: Date) {
        return moment(value).format("ddd MMM DD, YYYY [at] HH:mm a");
    },
    formatDateShort(value: Date) {
      return moment(value).format("ddd MMM DD, YYYY");
    },
    formatCurrency(value: Date) {
        return value.toLocaleString();
    }
}

export default filters;

export const numberFormats = {
    "en-US": {
      currency: {
        style: "currency",
        currency: "USD",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    "en-GB": {
      currency: {
        style: "currency",
        currency: "GBP",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    "en-NG": {
      currency: {
        style: "currency",
        currency: "NGN",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
    "ja-JP": {
      currency: {
        style: "currency",
        currency: "JPY",
        useGrouping: true,
        currencyDisplay: "symbol",
      },
      decimal: {
        style: "decimal",
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 5,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
    },
};

