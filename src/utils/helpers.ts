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

export class helper {
    static getBaseUrl = () : string => {
        const baseUrl = process.env.NODE_ENV === 'development' ? "https://localhost:5090/" : "https://axamansard.com/partnerapp/";
        return baseUrl;
    }
}
