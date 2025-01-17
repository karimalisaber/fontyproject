import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ProductViewDialogComponent } from 'src/app/modules/material/components/product-view-dialog/product-view-dialog.component';
import { SiteService } from 'src/app/modules/shared/services/site.service';
import { ItemsService } from 'src/app/modules/shared/services/items.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products;
  lang: string = this.site.getLangNumber();
  subscription: Subscription;
  i: number = 8;
  allProducts;
  lenght: number;

    constructor(private site: SiteService, private item: ItemsService, private dialog: MatDialog) { }
  
    ngOnInit() {
       this.subscription = this.item.getItems().subscribe(res=>{
        this.allProducts = res;
        this.lenght= this.allProducts.length;
        
         this.products = res.slice(0,this.i);
       });
    }
  
    viewProduct(id){
      this.dialog.open(ProductViewDialogComponent, {
        data: {id, lang: this.lang}
      })
    }

    checkLenght(){
      return this.i < this.lenght
    }

    loadMore(){
      this.i  +=  8; 
      this.products = this.allProducts.slice(0,this.i) 
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
