import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { UserCat } from 'src/app/interfaces/categories-response';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Product } from 'src/app/interfaces/products';
import { ItemData, Items, updateItem } from 'src/app/interfaces/items';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';


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
  private items: ItemsService,
  private dialog: MatDialog) {}

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
        this.items.editProduct(this.item, this.productId).subscribe(
          res=> {
            this.imgUrl = 'assets/images/upload-image.png';
             // reset the form here
             this.dialog.open(SuccesPostDialogComponent)}, 
           error=> this.dialog.open(ErrorDialogComponent));
      }

    else{
      this.items.addProduct(this.item).
      subscribe(
         res=> {
          this.imgUrl = 'assets/images/upload-image.png';
          // reset the form here
          this.dialog.open(SuccesPostDialogComponent)}, 
        error=> this.dialog.open(ErrorDialogComponent));
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