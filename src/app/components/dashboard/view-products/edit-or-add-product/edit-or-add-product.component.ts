import { Component, OnInit, Input } from '@angular/core';
import { UserCat } from 'src/app/interfaces/categories-response';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'edit-or-add-product',
  templateUrl: './edit-or-add-product.component.html',
  styleUrls: ['./edit-or-add-product.component.scss']
})
export class EditOrAddProductComponent implements OnInit {
@Input('type') type // for know its edit or add;

categories$: Observable<UserCat[]>;
  constructor(private cat: CategoriesService) { }

  ngOnInit() {
   this.categories$ = this.cat.getCategories();
  }

}
