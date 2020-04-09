import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SiteService } from 'src/app/services/site.service';
import { SuccesPostDialogComponent } from '../succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

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

  constructor(@Inject(MAT_DIALOG_DATA) public serviceDetails: {id,lang}, private site: SiteService, private dialog: MatDialog) {
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
  
    if (this.imgChanged) {
      this.item.append("img", this.imageFile, this.imageFile.name);
      var item = { title: service.title, des: service.title, update_img: this.item.get("img"), lang: this.serviceDetails.lang }
    }

    else {
      var item = { title: service.title, des: service.title, update_img: this.item.get("img"), lang: this.serviceDetails.lang }
    }
    
    this.site.updateService(this.serviceDetails.id, item)
      .subscribe(
        () => this.dialog.open(SuccesPostDialogComponent),
        () => this.dialog.open(ErrorDialogComponent)
      );
  }

}
