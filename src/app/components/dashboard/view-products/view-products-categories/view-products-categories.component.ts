import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-view-products-categories',
  templateUrl: './view-products-categories.component.html',
  styleUrls: ['./view-products-categories.component.scss']
})
export class ViewProductsCategoriesComponent implements OnInit {

categories$;

  constructor(private cat: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.cat.getCategories();
  }

}
