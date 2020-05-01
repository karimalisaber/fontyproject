import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getOrdersUrl, getHomeOrdersDataUrl, updateOrderStatusUrl } from '../environment/environment';
import { Orders, OrderData } from '../interfaces/orders';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http: HttpClient) {}

  
  getnewOrders(): Observable<OrderData[]>{
   return this.http.get<Orders>(getOrdersUrl).pipe(map((res)=> res.data
    .filter(res => res.status === null)
    
    ));
  }

  updateStatus(id, status){
    return this.http.put(updateOrderStatusUrl+id +'/' +status, {})
  }

  getHomeOrdersData(){
   return this.http.get(getHomeOrdersDataUrl).pipe(map((res:any)=> res.data));
  }

}
