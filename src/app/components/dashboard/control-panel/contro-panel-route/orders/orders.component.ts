import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderData } from 'src/app/interfaces/orders';
import { OrdersService } from 'src/app/services/orders.service';
import { MatTable, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  allOrders = new MatTableDataSource ();
  filteredOrders = new MatTableDataSource<OrderData[]> ();

  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;  

  constructor(private orders: OrdersService) {}
  
  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد العناصر في كل صفحة';

    // get new orders
    this.orders.getAllOrders().subscribe(res=>{
       this.allOrders.data = res;
    })
    this.allOrders.paginator = this.paginator;
  }

}
