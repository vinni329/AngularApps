import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { RecentCustomersService } from './services/recent-customers.service';
import { GetHeaders } from './utilities/header-utilities';
import { HttpClientModule } from '@angular/common/http';
import { CustomerSearchService } from './services/customer-search.service';
import { CustomerSearchBarComponent } from './components/customer-search/customer-search-bar/customer-search-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerSearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouteRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [
    RecentCustomersService,
    CustomerSearchService,
    GetHeaders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
