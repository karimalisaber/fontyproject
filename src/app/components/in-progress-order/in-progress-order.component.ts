import { Subscription } from 'rxjs';
import { RealTimeOrdersService } from '../../modules/shared/services/real-time-orders.service';
import { Component, OnInit } from '@angular/core';
import { OrderData } from 'src/app/interfaces/orders';
import { MatSnackBar } from '@angular/material';
import { OrdersService } from 'src/app/modules/shared/services/orders.service';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-in-progress-order',
  templateUrl: './in-progress-order.component.html',
  styleUrls: ['./in-progress-order.component.scss']
})
export class InProgressOrderComponent implements OnInit {
  allOrders: OrderData[] = [];
  filteredOrders: OrderData[] = [];
  subscription: Subscription;

  panelOpenState = false;
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];
  isAdmin: boolean = true;
  constructor(private auth: AuthService,private orders: OrdersService, private snackBar: MatSnackBar, private pusher: RealTimeOrdersService) {}
  
  ngOnInit() {
    // get new orders
    this.getAllOrders();  
    this.getNewOrders();
    this.isAdmin = this.auth.isAdmin;

  }

  private getAllOrders(){
    this.subscription = this.orders.getInProgreeOrders().subscribe(res=> this.filteredOrders = this.allOrders = res);
  }


  private getNewOrders(){
    this.pusher.InProgressChanel.bind('new_do_order', res => {
      // this.allOrders.push(res.data);
      // this.filteredOrders = this.allOrders;

      this.getAllOrders();
    });
  }

  orderAction(id, status){
    let item = this.allOrders.filter(res=> res.id === id)[0];
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
      }
      );
  }

  customFilter(value){
    this.filteredOrders = (value) ?
    this.allOrders.filter( (p:any) => p.order_user.name.toLowerCase().includes(value.trim().toLowerCase())) : this.allOrders;   
  }

  ngOndestroy(){
    this.subscription.unsubscribe();
  }
}
