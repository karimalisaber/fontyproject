import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  imgUrl = 'assets/images/upload-image.png'
  arabic: boolean =true;
  imageFile: any = null; // for uploaded image
  updateStatus: boolean = false;
  changeImage: boolean = false;

  constructor(private site: SiteService) { }

  ngOnInit() {
    
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

  lanChanged(){

  }
}
