import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersHostComponent } from './customers-host/customers-host.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CustomersHostComponent,
    FormRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
