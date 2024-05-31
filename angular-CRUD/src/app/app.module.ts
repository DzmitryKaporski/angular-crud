import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersHostComponent } from './customers-host/customers-host.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FormRegistrationComponent } from './form-registration/form-registration.component';

@NgModule({ declarations: [
        AppComponent,
        CustomerDetailsComponent,
        CustomersListComponent,
        CustomersHostComponent,
        FormRegistrationComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
