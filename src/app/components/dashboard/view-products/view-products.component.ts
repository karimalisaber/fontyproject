import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
products = [{id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' }, {id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' } , {id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' }]
  constructor() { }

  ngOnInit() {
  }

}
