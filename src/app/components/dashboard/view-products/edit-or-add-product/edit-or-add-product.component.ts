import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-or-add-product',
  templateUrl: './edit-or-add-product.component.html',
  styleUrls: ['./edit-or-add-product.component.scss']
})
export class EditOrAddProductComponent implements OnInit {
@Input('type') type;
  constructor() { }

  ngOnInit() {
  }

}
