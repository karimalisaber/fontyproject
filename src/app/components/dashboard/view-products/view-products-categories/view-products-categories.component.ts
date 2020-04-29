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
  dataSource: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['image', 'name', 'body', 'price', 'category', 'delete', 'edit'];

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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
