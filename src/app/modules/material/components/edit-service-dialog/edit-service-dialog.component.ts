import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-edit-service-dialog',
  templateUrl: './edit-service-dialog.component.html',
  styleUrls: ['./edit-service-dialog.component.scss']
})
export class EditServiceDialogComponent implements OnInit {
  imgUrl;
  imageFile: any = null; // for uploaded image
  imgChanged: boolean = false;
  service;

  item: FormData = new FormData();

  constructor(
    @Inject(MAT_DIALOG_DATA) public serviceDetails: {id,lang}, 
    private site: SiteService, 
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.site.getSpecificService(this.serviceDetails.id).subscribe(res => {
      this.service = res;
      this.imgUrl = 'http://fonty.ieeeshasb.org/public/wslider/' + this.service.img
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

  updateService(service) {
    this.item.append("name", service.name);
    this.item.append("lang", this.serviceDetails.lang);
    
    if (this.imageFile)
      this.item.append("update_img", this.imageFile, this.imageFile.name );

    this.site.updateService(this.serviceDetails.id, this.item)
      .subscribe(
         () =>  this.snackBar.open('تم تعديل الخدمة بنجاح', `` , {duration: 1500}),
         () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
      );
  }

}
