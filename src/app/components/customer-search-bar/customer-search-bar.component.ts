import { Component, OnInit } from '@angular/core';
import { RecentCustomersService } from 'src/app/services/recent-customers.service';

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

    addresses = ['332 night sail dr', '1520 brushfoot trail'];
    selectedOption = this.searchOptions[0];

    constructor(private recentCustomerService: RecentCustomersService) { }

    ngOnInit() {
        this.recentCustomerService.getAppId();
    }

    onSelectAddress(address: string) {
        console.log('address selected: ', address);
    }
}