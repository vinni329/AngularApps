export class Customer {
    name: string;
    firstName: string;
    lastName: string;
    middleName: string;
    landlinePhone?: PhoneModel;
    cellPhone?: PhoneModel;
    ownerID: string;
    activeProducts: Array<any>;
    serviceAddress: string;
    customerNumber: string;
    email: string;
    PostalAddressID: string;
    productSoldId: string;
  
    street1: string;
    street2: string;
    city: string;
    stateCode: string;
    postalCode: string;
    countryCode: string;
  
    orgInfo?: OrganizationInfo; 
    selectedSalesAgreementNumber?: string; 
  
    constructor(ownerId: string = "") {
      this.activeProducts = [];
      this.ownerID = ownerId;
    }
  }
  
  export interface PhoneModel {
    AreaCode?: string;
    PhoneType?: string;
    Number?: string;
  }
  
  export class OrganizationInfo{
    branchNumber: string;
    orgId: string;
  }
  