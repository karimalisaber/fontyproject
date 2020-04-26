import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SiteService } from 'src/app/services/site.service';
import { SuccesPostDialogComponent } from '../succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

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

  constructor(@Inject(MAT_DIALOG_DATA) public sliderDetails: {id,lang}, private site: SiteService, private dialog: MatDialog) {
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
    // if (this.imgChanged) {
      console.log(this.imageFile);
      
    this.item.append("title", slider.title);
    this.item.append("lang", this.sliderDetails.lang);
    this.item.append("des", "null");
    this.item.append("img", this.imageFile, this.imageFile.name );
      
    console.log(this.imageFile);

      // var item = { title: slider.title, des: slider.title, update_img: this.item.get("img"), lang: this.sliderDetails.lang }
    // }

    // else {
      // var item = { title: slider.title, des: slider.title, update_img: this.item.get("img"), lang: this.sliderDetails.lang }
    // }
    
    this.site.updateSlider(this.sliderDetails.id, this.item)
      .subscribe(
        () => this.dialog.open(SuccesPostDialogComponent),
        () => this.dialog.open(ErrorDialogComponent)
      );
  }
}