import { Injectable } from '@angular/core';
import { GetHeaders } from '../utilities/header-utilities';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { map, take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomerSearchService {

    allCustomers: Customer[] = [];

    constructor(
        private headers: GetHeaders,
        private http: HttpClient
    ) { }

    searchCustomersByAddress(address: string) {

    }

    getAddressSuggestions(inputAddress: string) {
        let { common, address } = environment.ssAPI;
        let baseURL = common.endpointPrefix;

        if (inputAddress && inputAddress.length > 0)

        this.http.get(`${baseURL}${address.endpoint}/FullAddressSearch`,
        {headers: this.headers.getHeaders(),
        params: {'fFullAddress': inputAddress}}
        ).pipe()






        //   .map(res => this.parseResults.parseFullAddress(res))
        //   .takeUntil(this.subscriptionList)
        //   .debounceTime(300)
        //   .subscribe(s => {
        //     this.addresses = s;
        //   })

    }
}