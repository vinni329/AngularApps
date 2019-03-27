import { Injectable } from '@angular/core';
import { GetHeaders } from '../utilities/header-utilities';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerSearchService {

    allCustomers: Customer[] = [];

    constructor(
        private headers: GetHeaders,
        private http: HttpClient
    ) { }

    searchCustomersByAddress(address: string) {

    }
}