import { Injectable } from '@angular/core';
import { GetHeaders } from '../utilities/header-utilities';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { map, take } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { ServiceAddress } from '../models/service-address.model';
import { APIResponse } from '../models/api-response.model';
import { MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR } from '@angular/material';

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

        this.http.get<APIResponse<ServiceAddress>>(`${baseURL}${address.endpoint}/FullAddressSearch`,
        {headers: this.headers.getHeaders(),
        params: {'fFullAddress': inputAddress}}
        ).pipe(
            map((response: APIResponse<ServiceAddress>) => {
                address = response.Data[0]
                let fullAddress = `${element.StreetAddress1}${element.StreetAddress2} , ${element.City + ', '} ${element.StateCode}${element.PostalCode}`
            })
        )






        //   .map(res => this.parseResults.parseFullAddress(res))
        //   .takeUntil(this.subscriptionList)
        //   .debounceTime(300)
        //   .subscribe(s => {
        //     this.addresses = s;
        //   })
    }


    parseFullAddress(response: any) {
        let result: Array<ServiceAddress> = [];
        if (response.Data) {
          response.Data.forEach(element => {
            let addressentity: ServiceAddress = new ServiceAddress();
            addressentity.streetAddress1 = element.StreetAddress1;
            addressentity.streetAddress2 = element.StreetAddress2;
            addressentity.city = element.City;
            addressentity.stateCode = element.StateCode;
            addressentity.postalCode = element.PostalCode;
            addressentity.countryCode = element.CountryCode;
            element= Util.trimAllStringsInObject(element);
            addressentity.fullServiceAddress = `${element.StreetAddress1}${element.StreetAddress2} , ${element.City + ', '} ${element.StateCode}${element.PostalCode}`
            result.push(addressentity);
          });
          return result;
        }
        else {
          throw new Error("Error when trying to get Address data")
        }
      }
}