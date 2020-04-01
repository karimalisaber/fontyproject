import { Component, OnInit, OnDestroy} from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ItemsService } from 'src/app/services/items.service';
import { Subscription } from 'rxjs';
import { ItemData } from 'src/app/interfaces/items';
import { AssetsService } from 'src/app/services/assets.service';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';

@Component({
  selector: 'app-view-products-categories',
  templateUrl: './view-products-categories.component.html',
  styleUrls: ['./view-products-categories.component.scss']
})

export class ViewProductsCategoriesComponent implements OnInit , OnDestroy {
  catId: number;
  products: ItemData[];
  filteredProducts:ItemData[];
  filteredProductsByCat:ItemData[]; // all cat in the begin
  categories$;
  subscription: Subscription;
  selectedCategory: string ="كل الأقسام";

  constructor(
    private cat: CategoriesService, 
    private items: ItemsService,
    private assets: AssetsService,
    private dialog: MatDialog) { }


  ngOnInit() {
    this.categories$ = this.cat.getCategories(); 

    this.subscription = this.items.getItems().subscribe(res=>{ 
     this.filteredProductsByCat = this.filteredProducts = this.products = res;
    });
  }
  
  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteProduct(id):false) ;
 }

 private deleteProduct(id){
    this.items.deleteProduct(id).subscribe(res=> {

      let itemIndex = this.filteredProducts.findIndex( item =>{ return item.id === id });
      
      this.filteredProducts.splice(itemIndex, 1);
      this.dialog.open(SuccessDialogComponent);      
    });
 }

  filter(value){
    this.filteredProducts = (value) ?
    this.filteredProducts.filter(p => p.name.toLowerCase().includes(value.toLowerCase())) : this.filteredProductsByCat ; 
  }

  filteredCategory(value, catName){
    this.selectedCategory = catName;

    this.filteredProducts = (value) ?
    this.products.filter(p => p.catogery_id === value) : this.products ;
    
    this.filteredProductsByCat = this.filteredProducts; // using in search filter
  }

  allCategories(){
    this.filteredProducts = this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
