import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderData } from 'src/app/interfaces/orders';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../../assets/error-dialog/error-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { getOrdersUrl } from 'src/app/environment/environment';

@Component({
  selector: 'app-orders-action',
  templateUrl: './orders-action.component.html',
  styleUrls: ['./orders-action.component.scss']
})

export class OrdersActionComponent implements OnInit {
  allOrders: OrderData[] = [];
  filteredOrders: OrderData[] = [];
  detection = 'accept_orders';
  panelOpenState = false;
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];

  constructor(private orders: OrdersService, private dialog: MatDialog, private route: ActivatedRoute) {}
  
  ngOnInit() {
    // get new orders
    this.orders.getnewOrders().subscribe(res=>{
      this.filteredOrders = this.allOrders = res;
    })
  }


  orderAction(id, status){
    let item = this.allOrders.filter(res=> res.id === id)[0];
    let index = this.allOrders.indexOf(item);

    let filteredIndex = this.allOrders.indexOf(item);
    this.allOrders.splice(index, 1);    
    this.filteredOrders.splice(index, 1);

    this.orders.updateStatus(id, status)
    .subscribe(
      res=>{}, 
      () => {
        this.allOrders.splice(index, 0, item);    
        this.filteredOrders.splice(index, 0, item);
        this.dialog.open(ErrorDialogComponent);
      }
      );
  }

  customFilter(value){
    this.filteredOrders = (value) ?
    this.allOrders.filter( (p:any) => p.order_user.name.toLowerCase().includes(value.trim().toLowerCase())) : this.allOrders;   
  }
}
