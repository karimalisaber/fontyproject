import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getOrdersUrl, getHomeOrdersDataUrl, updateOrderStatusUrl, getInProgressOrdersUrl } from '../environment/environment';
import { Orders, OrderData } from '../interfaces/orders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http: HttpClient) {}

  
  getNewOrders(): Observable<OrderData[]>{
   return this.http.get<Orders>(getOrdersUrl).pipe(map(
     res => res.data
    ));
  }

  getInProgreeOrders(){
    return this.http.get<Orders>(getInProgressOrdersUrl).pipe(map((res)=> res.data));
  }

  getAllOrders(): Observable<OrderData[]>{
    return this.http.get<Orders>(getOrdersUrl).pipe(map((res)=> res.data));
   }
 

  updateStatus(id, status){
    return this.http.put(updateOrderStatusUrl+id +'/' +status, {})
  }

  getHomeOrdersData(){
   return this.http.get(getHomeOrdersDataUrl).pipe(map((res:any)=> res.data));
  }

}
