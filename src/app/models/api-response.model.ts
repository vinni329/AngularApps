export interface APIResponse<T> {
    Data: T;
    Paging: Paging;
    Errors: Error[];
}

export interface Paging {
    CurrentPageSize: number;
    CurrentPage: number;
    TotalPages: number;
    TotalRecords: number;
}

export interface Error {
    ErrorID: string;
    Severity: number;
    Type: number;
    AdditionalInformation: any;
    Description: string;
}