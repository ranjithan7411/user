import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from './products';

@Injectable({
  
  providedIn: 'root'
})
export class ServiceService {
  private _url: string ="/src/products.json";

  constructor(private http:HttpClient) { }
  getProducts() : Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>(this._url);
  }
}
