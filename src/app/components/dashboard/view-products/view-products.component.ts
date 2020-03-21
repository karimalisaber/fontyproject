import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  catId: number;

  products = [{id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' }, {id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' } , {id: 1 , image: '', name:  '', pre: '' , price: '', delete: '' , edit: '' }]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.catId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
