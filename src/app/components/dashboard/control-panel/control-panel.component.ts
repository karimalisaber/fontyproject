import { UsersService } from '../../../modules/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/modules/shared/services/orders.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  ordersDetails$;
  users;
  allOrders;

  constructor(private orders: OrdersService, private user: UsersService) {
    
   }

  ngOnInit() {
    this.getOrdersDetails();
    this.getUsers();
    this.getAllOrders();
  }

  private getOrdersDetails(){
    this.ordersDetails$ = this.orders.getHomeOrdersData();
  }

  private getUsers(){
    this.user.getSomeUsers(1).subscribe((res:any)=> this.users = res.data);
  }

  
  private getAllOrders(){
    this.orders.getInProgreeOrders().subscribe(res=> this.allOrders = res);
  }

}
