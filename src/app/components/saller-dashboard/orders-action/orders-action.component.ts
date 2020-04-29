import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderItems } from 'src/app/interfaces/orders';

@Component({
  selector: 'app-orders-action',
  templateUrl: './orders-action.component.html',
  styleUrls: ['./orders-action.component.scss']
})

export class OrdersActionComponent implements OnInit {
orderItems: OrderItems;

  constructor(private orders: OrdersService) {}
  
  ngOnInit() {
    this.orders.getOrders().subscribe(res=>{
      console.log(res);
        
    })
  }


}
