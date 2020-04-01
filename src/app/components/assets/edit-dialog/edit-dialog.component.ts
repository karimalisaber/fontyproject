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

  constructor(@Inject(MAT_DIALOG_DATA) public id: string, private site: SiteService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.site.getSpecificSlider(this.id).subscribe(res => {
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
    if (this.imgChanged) {
      this.item.append("img", this.imageFile, this.imageFile.name);
      var item = { title: slider.title, des: slider.title, img: this.item.get("img") }
    }

    else {
      var item = { title: slider.title, des: slider.title, img: this.item.get("img") }
    }

    this.site.updateSlider(this.slider.id, item)
      .subscribe(
        () => this.dialog.open(SuccesPostDialogComponent),
        () => this.dialog.open(ErrorDialogComponent)
      );
  }

}