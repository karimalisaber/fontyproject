import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  details = [
    {name: 'برجر', price: '50', time: '30 دقيقة'},
    {name: 'لحمة', price: '20', time: '60 دقيقة'},
    {name: 'فراخ', price: '30', time: '20 دقيقة'},
    {name: 'بطاطس', price: '225', time: '20 دقيقة'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
