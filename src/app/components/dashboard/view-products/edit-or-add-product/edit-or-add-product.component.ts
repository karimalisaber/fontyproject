import { Component, OnInit, Input } from '@angular/core';
import { UserCat } from 'src/app/interfaces/categories-response';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products';
import { updateItem } from 'src/app/interfaces/items';
import { MatSnackBar } from '@angular/material';
import { CategoriesService } from 'src/app/modules/shared/services/categories.service';
import { ItemsService } from 'src/app/modules/shared/services/items.service';

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
imgTitle: string = 'اضافة صورة';
item: FormData = new FormData();

localForm: Product = {
  id: null,
  name: null ,
  price: null,
  body: null,
  points: null,
  descound: null,
  img: null,
  catogery_id: null
};
changeImage: boolean = false;

categories$: Observable<UserCat[]>;

constructor(private cat: CategoriesService,
  private route: ActivatedRoute,
  private snackBar: MatSnackBar,
  private items: ItemsService,
  ) {}

  ngOnInit() {
    this.categories$ = this.cat.getCategories();
    this.productId = this.route.snapshot.paramMap.get('productId')
    
    if(this.productId){ // for update
    this.items.getItem(this.productId).subscribe( (res:updateItem) => {
      this.updateStatus = true;
      this.imgTitle = 'تعديل الصورة';
      this.imgUrl = 'http://fonty.ieeeshasb.org/public/items/' + res.data.img;

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
      
     if(this.changeImage) this.item.append("img", this.imageFile, this.imageFile.name);
      
      if(this.updateStatus) {
        this.item.append("update_img", this.imageFile, this.imageFile.name);
        this.items.editProduct(this.item, this.productId).subscribe(
          res=> {
            this.imgUrl = 'assets/images/upload-image.png';
             // reset the form here
             this.snackBar.open('تم تعديل المنتج بنجاح ', `` , {duration: 1500})
            },
          error=> 
           this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
     }

    else{
      this.items.addProduct(this.item).
      subscribe(
         res=> {
          this.imgUrl = 'assets/images/upload-image.png';
          // reset the form here
          this.snackBar.open('تم اضافة المنتج بنجاح ', `` , {duration: 1500});
        },
        error=> this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
    }

    this.changeImage = false;
  }
  
  imageUpload(event){
    if(event.target.files){
      this.changeImage = true;
      this.imageFile = event.target.files[0];
    
     var render = new FileReader();    
     render.readAsDataURL(this.imageFile);
     render.onload = (event: any) =>  this.imgUrl = event.target.result;
  }
}
}