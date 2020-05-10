import { RealTimeOrdersService } from './../../services/real-time-orders.service';
import { Component, OnInit } from '@angular/core';
import { OrderData } from 'src/app/interfaces/orders';
import { OrdersService } from 'src/app/services/orders.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-recieve-order',
  templateUrl: './recieve-order.component.html',
  styleUrls: ['./recieve-order.component.scss']
})

export class RecieveOrderComponent implements OnInit {
  allOrders: OrderData[] = [];
  filteredOrders: OrderData[] = [];
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];

  constructor(private orders: OrdersService, private snackBar: MatSnackBar, private pusher: RealTimeOrdersService) {}
  
  ngOnInit() {
    this.getAllOrders();
    this.getNewOrders();
  }

  private getAllOrders(){
    this.orders.getNewOrders().subscribe(res=> this.filteredOrders = this.allOrders = res);
  }

  private getNewOrders(){
    this.pusher.channel.bind('new_order', res => {
      this.allOrders.push(res.data);
      this.filteredOrders = this.allOrders;
    });
  }

  orderAction(id, status){
    let item = this.filteredOrders.filter(res=> res.id === id)[0];
    let index = this.allOrders.indexOf(item);
    this.allOrders.splice(index, 1);
    this.filteredOrders = this.allOrders;
    
    this.orders.updateStatus(id, status)
    .subscribe(
      res=>{}, 
      () => {
        this.allOrders.splice(index, 0, item);
        this.filteredOrders = this.allOrders;
        this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
      },
      );
  }

  customFilter(value){
    this.filteredOrders = (value) ?
    this.allOrders.filter( (p:any) => p.order_user.name.toLowerCase().includes(value.trim().toLowerCase())) : this.allOrders;   
  }
}
