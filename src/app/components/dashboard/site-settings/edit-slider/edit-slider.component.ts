import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-edit-slider',
  templateUrl: './edit-slider.component.html',
  styleUrls: ['./edit-slider.component.scss']
})
export class EditSliderComponent implements OnInit {

  imgUrl = 'assets/images/default-slider.png';
  imageFile: any = null; // for uploaded image
  item: FormData = new FormData();
  
  constructor(private site: SiteService) { }

  ngOnInit() {
  }


  addSlider(slider){
    this.item.append("name", slider.title);
      this.item.append("price", slider.content);
      this.item.append("img", this.imageFile, this.imageFile.name );
      
    this.site.addSlider(this.item).subscribe(res=>console.log(res));;
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
