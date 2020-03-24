import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.scss']
})
export class AppSliderComponent implements OnInit , OnDestroy {
  imgUrl = 'assets/images/default-slider.png';
  slider: FormData = new FormData();
  sliders;
  subscription: Subscription;

  imageFile: any = null; // for uploaded image

  constructor(private setting:SettingService) { }

  ngOnInit() {
    this.subscription = this.setting.getSliders().subscribe(res => {
      this.sliders = res;
    });
  }
  
  addSlider(){
      this.slider.append('img', this.imageFile, this.imageFile.name);
      this.setting.addSlider(this.slider).subscribe((res: {data}) => {
      
      this.sliders.push(res.data); // push to the view
      
      this.resetInputs(); // reset inputs        
    });
  }

  private resetInputs(){
    this.imgUrl = 'assets/images/default-slider.png';
    this.imageFile = null;
  }

  deleteSlider(id){
     this.setting.deleteSlider(id).subscribe(res=> {
      let itemIndex = this.sliders.findIndex( item =>{ return item.id === id });
      this.sliders.splice(itemIndex, 1);   
    });
  }

  imageUpload(event){
    if(event.target.files){
     this.imageFile = event.target.files[0];
    
     var render = new FileReader();    
     render.readAsDataURL(this.imageFile);
     render.onload = (event: any) =>  this.imgUrl = event.target.result ;
  }
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
