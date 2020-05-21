import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SiteService } from 'src/app/modules/shared/services/site.service';

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
  
  constructor(private route: ActivatedRoute, private site: SiteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  
  addSlider(slider){
    // this.item.append("title", slider.title);
    this.item.append("title", "null");
    this.item.append("lang", this.lang);
    this.item.append("des", "null");
    this.item.append("img", this.imageFile, this.imageFile.name );
      
    this.site.addSlider(this.item)
    .subscribe(
         res=> { 
           this.resetInputs(); // reset inputs
            this.snackBar.open('تمت إضافة السلايدر بنجاح ', `` , {duration: 1500});
          },
          error=> this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
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
