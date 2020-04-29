import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getOrdersUrl, getHomeOrdersDataUrl } from '../environment/environment';
import { Orders, OrderData } from '../interfaces/orders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http: HttpClient) {}

  
  getOrders(): Observable<OrderData[]>{
   return this.http.get<Orders>(getOrdersUrl).pipe(map((res)=> res.data));
  }

  getHomeOrdersData(){
   return this.http.get(getHomeOrdersDataUrl).pipe(map((res:any)=> res.data));
  }
}
