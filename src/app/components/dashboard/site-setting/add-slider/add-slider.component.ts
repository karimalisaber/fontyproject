import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss']
})
export class AddSliderComponent implements OnInit {
  lang = this.route.snapshot.paramMap.get('lang');
  
  imgUrl = 'assets/images/default-slider.png';
  imageFile: any = null; // for uploaded image
  item: FormData = new FormData();
  
  constructor(private route: ActivatedRoute, private site: SiteService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  
  addSlider(slider){

    this.item.append("title", slider.title);
    this.item.append("lang", this.lang);
    this.item.append("des", "null");
    this.item.append("img", this.imageFile, this.imageFile.name );
      
    this.site.addSlider(this.item)
    .subscribe(
         res=> { 
           this.resetInputs(); // reset inputs
           this.dialog.open(SuccesPostDialogComponent);
          },
         error=> this.dialog.open(ErrorDialogComponent));
  }
  
  
  private resetInputs(){
    this.imgUrl = 'assets/images/default-slider.png';
    this.imageFile = null;
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
