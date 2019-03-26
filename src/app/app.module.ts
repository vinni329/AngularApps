import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { CustomerSearchBarComponent } from './components/customer-search-bar/customer-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSearchComponent,
    CustomerSearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouteRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
