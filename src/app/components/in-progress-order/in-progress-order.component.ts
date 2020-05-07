import { Component, OnInit } from '@angular/core';
import { OrderData } from 'src/app/interfaces/orders';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ErrorDialogComponent } from '../assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-in-progress-order',
  templateUrl: './in-progress-order.component.html',
  styleUrls: ['./in-progress-order.component.scss']
})
export class InProgressOrderComponent implements OnInit {
  allOrders: OrderData[] = [];
  filteredOrders: OrderData[] = [];

  panelOpenState = false;
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];

  constructor(private orders: OrdersService, private snackBar: MatSnackBar) {}
  
  ngOnInit() {
    
    // get new orders
    this.orders.getInProgreeOrders().subscribe(res=>{
      this.filteredOrders = this.allOrders = res;      
    });
    
  }


  orderAction(id, status){
    let item = this.allOrders.filter(res=> res.id === id)[0];
    let index = this.allOrders.indexOf(item);
    let filteredIndex = this.allOrders.indexOf(item);

    this.allOrders.splice(index, 1);
    this.filteredOrders.splice(filteredIndex, 1);

    this.orders.updateStatus(id, status)
    .subscribe(
      res=>{},
      () => {
        this.allOrders.splice(index, 0, item);    
        this.filteredOrders.splice(filteredIndex, 0, item);
        this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
      }
      );
  }

  customFilter(value){
    this.filteredOrders = (value) ?
    this.allOrders.filter( (p:any) => p.order_user.name.toLowerCase().includes(value.trim().toLowerCase())) : this.allOrders;   
  }
}
