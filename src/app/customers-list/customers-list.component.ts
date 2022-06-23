import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/customer';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  isEditPos: number | null = null;
  isChanged: boolean = false;
  private tempCustomer!: Customer;

  ngOnInit(): void {
    this.httpService.getData();
  }

  editCustomer(i: number): void {
    this.isEditPos = i;
    this.tempCustomer = this.resetCustomer();
  }

  cancelEdit(): void {
    this.isEditPos = null;
    this.isChanged = false;
  }

  saveCustomer(customer: Customer, i: number): void {
    const mergeCustomer: Customer = this.mergeCustomer(customer, this.tempCustomer)
    this.httpService.updateData(mergeCustomer, i)
    this.cancelEdit();
  }

  deleteCustomer(customer: Customer): void {
    this.httpService.deleteData(customer);
  }

  setValue(key: string, value: string, original: string): void {
    const valueTrim = value.trim() // обрезает пробелы если они в конце

    if (valueTrim !== original && valueTrim !== this.tempCustomer[key as keyof Customer]) {
      this.tempCustomer[key as keyof Customer] = valueTrim;
      this.isChanged = true;
    }
  }

  private resetCustomer = (): Customer => ({
    key: null,
    name: null,
    email: null,
    mobile: null,
    location: null,
  })

  private mergeCustomer<T>(original: T, temp: T) {
    const result: T = { ...original }
    for (let key in temp) {
      if (temp[key]) {
        result[key] = temp[key]
      }
    }
    return result;
  }
}
