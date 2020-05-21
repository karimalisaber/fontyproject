import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  imgUrl;
  imageFile: any = null; // for uploaded image
  imgChanged: boolean = false;
  slider;

  item: FormData = new FormData();

  constructor(@Inject(MAT_DIALOG_DATA) public sliderDetails: {id,lang}, private site: SiteService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.site.getSpecificSlider(this.sliderDetails.id).subscribe(res => {
      this.slider = res;
      this.imgUrl = 'http://fonty.ieeeshasb.org/public/wslider/' + this.slider.img
    });
  }

  imageUpload(event) {
    if (event.target.files) {
      this.imgChanged = true;
      this.imageFile = event.target.files[0];

      var render = new FileReader();
      render.readAsDataURL(this.imageFile);
      render.onload = (event: any) => this.imgUrl = event.target.result;
    }
  }

  updateSlider(slider) {
      
    this.item.append("title", slider.title);
     this.item.append("lang", this.sliderDetails.lang);
    this.item.append("des", "null");

    if(this.imageFile)
      this.item.append("update_img", this.imageFile, this.imageFile.name );
    
    this.site.updateSlider(this.sliderDetails.id, this.item)
      .subscribe(
        () =>  this.snackBar.open('تم تعديل السلايدر بنجاح', `` , {duration: 1500}),
        () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
      );
  
  }
}