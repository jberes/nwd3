import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://appbuilder-public.s3.amazonaws.com/northwind';

@Injectable({
  providedIn: 'root'
})
export class Northwind1Service {
  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/customers`);
  }
}
