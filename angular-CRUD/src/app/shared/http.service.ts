import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of } from 'rxjs';

import { Customer } from './customer';

const url = 'https://dzmitrykaporski-angular-d012b-default-rtdb.firebaseio.com/'
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  customers: Customer[] = []

  constructor(private httpClient: HttpClient) { }

  createData(customer: Customer): void {
    this.httpClient.post<Customer>(`${url}.json`, customer, httpOptions).subscribe(
      {
        next: res => this.customers.push({ ...{ key: res.name }, ...customer }),
        error: catchError(this.errorHandler('POST'))
      }
    )
  }

  getData(): void {
    this.httpClient.get<Customer[]>(`${url}.json`, httpOptions).subscribe(
      {
        next: (res: Customer[]) => {
          for (let key in res) {
            const customer = { key, ...res[key] }
            this.customers.push(customer)
          }
        },
        error: catchError(this.errorHandler('GET'))
      }
    )
  }

  updateData(customer: Customer, i: number): void {
    const { key, ...data } = customer
    this.httpClient.put<Customer>(`${url}/${customer.key}.json`, data, httpOptions).subscribe(
      {
        next: () => this.customers[i] = customer,
        error: catchError(this.errorHandler('PUT'))
      }
    )
  }

  deleteData(customer: Customer): void {
    this.httpClient.delete<void>(`${url}/${customer.key}.json`, httpOptions).subscribe(
      {
        next: () => this.customers.splice(this.customers.indexOf(customer), 1),
        error: catchError(this.errorHandler('DELETE'))
      }
    )
  }

  private errorHandler(operation: string, res?: object): any {
    return (error: any): Observable<object> => {
      console.error(`${operation} failed:${error}`)
      return of(res as object)
    }
  }
}
