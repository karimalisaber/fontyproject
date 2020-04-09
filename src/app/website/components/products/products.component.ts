import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialog } from '@angular/material';
import { ProductViewDialogComponent } from 'src/app/components/assets/product-view-dialog/product-view-dialog.component';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products$;
lang: string = this.site.getLangNumber();

  constructor(private site: SiteService, private item: ItemsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.products$ = this.item.getItems();
  }

  viewProduct(id){
    this.dialog.open(ProductViewDialogComponent, {
      data: {id, lang: this.lang}
    })
  }

}
