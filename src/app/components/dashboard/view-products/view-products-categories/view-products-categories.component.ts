import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ItemData } from 'src/app/interfaces/items';
import { MatSort, MatTable, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { CategoriesService } from 'src/app/modules/shared/services/categories.service';
import { ItemsService } from 'src/app/modules/shared/services/items.service';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';

@Component({
  selector: 'app-view-products-categories',
  templateUrl: './view-products-categories.component.html',
  styleUrls: ['./view-products-categories.component.scss']
})

export class ViewProductsCategoriesComponent implements OnInit , OnDestroy {
  catId: number;
  products: ItemData[];
  filteredProducts = new MatTableDataSource<ItemData> ();
  filteredProductsByCat:ItemData[]; // all cat in the begin
  categories$;
  subscription: Subscription;
  selectedCategory: string ="كل الأقسام";

  dtTrigger = new Subject();

  displayedColumns: string[] = ['image', 'name', 'body', 'price', 'catogery_id', 'delete', 'edit'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private cat: CategoriesService, 
    private items: ItemsService,
    private assets: AssetsService,
    ) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد العناصر في كل صفحة';

    this.categories$ = this.cat.getCategories(); 
    
     this.subscription = this.items.getItems().subscribe(res=>{ 
     this.filteredProducts.data = res;
     this.filteredProductsByCat = this.filteredProducts.data = this.products = res;
    });

    this.filteredProducts.paginator = this.paginator;
  }

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteProduct(id):false) ;
 }

 private deleteProduct(id){
    this.items.deleteProduct(id).subscribe(res=> {
      let itemIndex = this.filteredProducts.data.findIndex( item =>{ return item.id === id });
      
      this.filteredProducts.data.splice(itemIndex, 1);

      this.filteredProducts.data = this.filteredProducts.data;
      
      this.snackBar.open('تم حذف المنتج بنجاح ', `` , {duration: 1500});
      
    },
    error=> this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
 }

  filteredCategory(value, catName){
    this.selectedCategory = catName;

    this.filteredProducts.data = (value) ?
    this.products.filter(p => p.catogery_id === value) : this.products ;
    
    this.filteredProductsByCat = this.filteredProducts.data; // using in search filter
  }

  allCategories(){
    this.filteredProducts.data = this.products;
  }

  applyFilter(value:string){
    this.filteredProducts.filter = value.trim().toLowerCase();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
