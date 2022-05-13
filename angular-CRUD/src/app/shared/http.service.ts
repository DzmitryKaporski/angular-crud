import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { catchError, Observable, of } from 'rxjs';

const url = 'https://dzmitry-kaporski-angular-crud-default-rtdb.asia-southeast1.firebasedatabase.app/'
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  customers: Customer[] = []

  constructor(private httpClient: HttpClient) { }

  // CRUD

  // create => POST
  createData(customer: Customer): void {
    this.httpClient.post<Customer>(`${url}.json`, customer, httpOptions).subscribe(
      {
        next: res => this.customers.push({ ...{ key: res.name }, ...customer }),
        error: catchError(this.errorHandler('POST'))
      }
    )
  }

  // read =>GET
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

  // update => PUT / PATCH
  updateData(customer: Customer, i: number): void {
    const { key, ...data } = customer
    this.httpClient.put<Customer>(`${url}/${customer.key}.json`, data, httpOptions).subscribe(
      {
        next: () => this.customers[i] = customer,
        error: catchError(this.errorHandler('PUT'))
      }
    )
  }

  // delete => DELETE
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
