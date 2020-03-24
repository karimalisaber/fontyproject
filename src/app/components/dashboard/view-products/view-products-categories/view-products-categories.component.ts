import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-products-categories',
  templateUrl: './view-products-categories.component.html',
  styleUrls: ['./view-products-categories.component.scss']
})

export class ViewProductsCategoriesComponent implements OnInit , OnDestroy {
  catId: number;
  products;
  categories$;
  subscription: Subscription;

  constructor(private cat: CategoriesService, private items: ItemsService) { }

  ngOnInit() {
    this.categories$ = this.cat.getCategories(); 

    // this.products$ = this.items.getItems();
    this.subscription = this.items.getItems().subscribe(res=>{ 
      this.products = res;
    });
  }

  deleteProduct(id){
    this.items.deleteProduct(id).subscribe(res=> {      
      let itemIndex = this.products.findIndex( item =>{ return item.id === id });
      this.products.splice(itemIndex, 1);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
