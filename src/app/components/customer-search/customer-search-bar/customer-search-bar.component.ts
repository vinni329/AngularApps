import { Component, OnInit } from '@angular/core';
import { RecentCustomersService } from 'src/app/services/recent-customers.service';
import { FormControl } from '@angular/forms';
import { CustomerSearchService } from 'src/app/services/customer-search.service';

@Component({
    selector: 'customer-search-bar',
    templateUrl: 'customer-search-bar.component.html',
    styleUrls:['./customer-search-bar.component.css']
})

export class CustomerSearchBarComponent implements OnInit {
    searchOptions = [
        {
            label: 'Global Search Query',
            value: 'globalSearch',
            type: 'text'
        },
        {
            label: 'Phone Number',
            value: 'phoneNumber',
            type: 'number'
        },
        {
            label: 'Service Address',
            value: 'serviceAddress',
            type: 'text'
        }
    ];
    inputValue = new FormControl('');

    addresses = ['332 night sail dr', '1520 brushfoot trail'];
    selectedSearchOption = this.searchOptions[0];

    constructor(
        private recentCustomerService: RecentCustomersService,
        private customerSearchService: CustomerSearchService
        ) { }

    ngOnInit() {
        this.recentCustomerService.getAppId();
    }

    onSearchAddressChange(entertedAddress) {
        this.customerSearchService.getAddressSuggestions(entertedAddress);
        console.log('testing', entertedAddress);
    }

}