export interface CustomerInfo {
    code:    number;
    success: boolean;
    message: string;
    data:    CustomerData;
}

export interface CustomerData {
    id:                number;
    clientNo:          number;
    bvn:               string;
    firstName:         string;
    surName:           string;
    middleName:        null;
    gender:            string;
    nationality:       string;
    dob:               string;
    cob:               string;
    mothersMaidenName: string;
    residentPermitNo:  null;
    occupation:        string;
    country:           string;
    state:             string;
    address:           string;
    mobileNo:          string;
    email:             string;
    nokName:           string;
    nokAddress:        string;
    nokPhone:          string;
    nokEmail:          string;
    nokRelationship:   string;
    registrationDate:  string;
    accountType:       string;
    title:             string;
    wealthSource:      null;
    incomeClass:       null;
    prospectBanks:     ProspectBank[];
}

export interface ProspectBank {
    bankName:      null;
    accountNumber: string;
    accountName:   string;
}
