import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { UserCat } from 'src/app/interfaces/categories-response';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Product } from 'src/app/interfaces/products';
import { ItemData, Items, updateItem } from 'src/app/interfaces/items';


@Component({
  selector: 'edit-or-add-product',
  templateUrl: './edit-or-add-product.component.html',
  styleUrls: ['./edit-or-add-product.component.scss']
})

export class EditOrAddProductComponent implements OnInit {
@Input('type') type // for know its edit or add;

imgUrl = 'assets/images/upload-image.png'
productId: string = null; // for edit item
imageFile: any = null; // for uploaded image
updateStatus: boolean = false;

item: FormData = new FormData();
karim ="fsaasf";
localForm: Product = {
  id: 4,
  name: 'asfsadfas',
  price: 'res.data.price',
  body: 'res.data.body',
  points: 'res.data.points',
  descound: 'res.data.descound',
  img: '',
  catogery_id: 5

};

categories$: Observable<UserCat[]>;
  constructor(private cat: CategoriesService,
    private route: ActivatedRoute,
    private items: ItemsService) {}

  ngOnInit() {
    this.categories$ = this.cat.getCategories();
    this.productId = this.route.snapshot.paramMap.get('productId')
    
    if(this.productId){
    this.items.getItem(this.productId).subscribe( (res:updateItem) => {
      this.updateStatus = true;
      
      this.localForm = {
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          body: res.data.body,
          points: res.data.points,
          descound: res.data.descound,
          img: '',
          catogery_id: res.data.catogery_id
      }});     
    }
  }

  addProduct(product){
      this.item.append("name", product.name);
      this.item.append("price", product.price);
      this.item.append("descound", product.descound);
      this.item.append("catogery_id", product.category);
      this.item.append("points", product.points);
      this.item.append("body", product.body);
      this.item.append("img", this.imageFile, this.imageFile.name);
      
      // if(this.updateStatus) this.items.editProduct(this.item).subscribe(res=>console.log(res));
      
      // else this.items.addProduct(this.item).subscribe();
  }
  
  imageUpload(event){
    if(event.target.files){
     this.imageFile = event.target.files[0];
    
     var render = new FileReader();    
     render.readAsDataURL(this.imageFile);
     render.onload = (event: any) =>  this.imgUrl = event.target.result ;
  }
}
    
}