import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderData } from 'src/app/interfaces/orders';

@Component({
  selector: 'app-orders-action',
  templateUrl: './orders-action.component.html',
  styleUrls: ['./orders-action.component.scss']
})

export class OrdersActionComponent implements OnInit {
  allOrders: OrderData[] = [];
  filteredOrders: OrderData[] = [];
  // allItems: ItemData[];

  constructor(private orders: OrdersService) {}
  
  ngOnInit() {
    // get new orders
    this.orders.getnewOrders().subscribe(res=>{
      this.filteredOrders = this.allOrders = res;

      // this.allItems.filter(res=> res.id = this.allOrders. )
    })
  }

  acceptOrder(id){
    let status = 0 ;
    this.orders.updateStatus(id, status);
  }


  customFilter(value){
    this.filteredOrders = (value) ?
    this.allOrders.filter( (p:any) => p.order_user.name.toLowerCase().includes(value.trim().toLowerCase())) : this.allOrders ; 
   
  }
}
