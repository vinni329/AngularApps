import { Injectable } from '@angular/core';
import { GetHeaders } from '../utilities/header-utilities';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/api-response.model';

@Injectable()
export class RecentCustomersService {

    recentlyViewedCustomers: Customer[] = [];
    identityHubApplicationId: string;
    constructor(
        private headers: GetHeaders,
        private http: HttpClient
    ) { }

    getAppId() {
        let { common, appUserProfiles } = environment.ssAPI;
        let baseURL = common.endpointPrefix
        let appName = appUserProfiles.appName;
        let userProfileRegistrationURL = appUserProfiles.registrations.endpoint;

        let requestHeaders = this.headers.getHeaders();
        this.http.get(`${baseURL}${userProfileRegistrationURL}`, { headers: requestHeaders, params: { 'fAppName': appName } })
            .subscribe((response: APIResponse<any>) => {
                response.Data.ApplicationID;
            })
    }
}