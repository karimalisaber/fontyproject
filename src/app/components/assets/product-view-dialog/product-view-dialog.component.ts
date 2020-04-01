import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-product-view-dialog',
  templateUrl: './product-view-dialog.component.html',
  styleUrls: ['./product-view-dialog.component.scss']
})
export class ProductViewDialogComponent implements OnInit {
item$;
  constructor(@Inject(MAT_DIALOG_DATA) private id, private item: ItemsService) { }

  ngOnInit() {
    this.item$ = this.item.getItem(this.id);
  }

}
