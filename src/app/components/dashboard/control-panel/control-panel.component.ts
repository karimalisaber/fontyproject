import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  ordersDetails$;
  constructor(private orders: OrdersService) {
    
   }

  ngOnInit() {
    this.ordersDetails$ = this.orders.getHomeOrdersData();
  }

}
