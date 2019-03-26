import { Component, OnInit } from '@angular/core';

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

    selectedOption = this.searchOptions[0];

    constructor() { }

    ngOnInit() { }
}