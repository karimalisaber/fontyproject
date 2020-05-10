import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialog } from '@angular/material';
import { SiteService } from 'src/app/services/site.service';
import { Subscription } from 'rxjs';
import { ProductViewDialogComponent } from 'src/app/modules/material/components/product-view-dialog/product-view-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
products;
lang: string = this.site.getLangNumber();
subscription: Subscription;

  constructor(private site: SiteService, private item: ItemsService, private dialog: MatDialog) { }

  ngOnInit() {
     this.subscription = this.item.getItems().subscribe(res=>{
       let i = 8;
       this.products = res.slice(0,i);
     });
  }

  viewProduct(id){
    this.dialog.open(ProductViewDialogComponent, {
      data: {id, lang: this.lang}
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
