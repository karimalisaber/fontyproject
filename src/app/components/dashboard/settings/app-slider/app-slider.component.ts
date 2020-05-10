import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.scss']
})
export class AppSliderComponent implements OnInit , OnDestroy {
  imgUrl = 'assets/images/phone_upload.jpg';

  slider: FormData = new FormData();
  sliders;
  subscription: Subscription;

  imageFile: any = null; // for uploaded image

  constructor(private setting:SettingService, private snackBar: MatSnackBar, private assets: AssetsService) { }

  ngOnInit() {
    this.subscription = this.setting.getSliders().subscribe(res => this.sliders = res);
  }
  
  addSlider(){
      this.slider.append('img', this.imageFile, this.imageFile.name);
      this.setting.addSlider(this.slider)
      .subscribe((res: {data}) => {
         this.sliders.push(res.data); // push to the view
         this.resetInputs(); // reset inputs
         this.snackBar.open('تم اضافة سلايدر جديد', `` , {duration: 1500})

    }, () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
    );
  }

  private resetInputs(){
    this.imgUrl = 'assets/images/default-slider.png';
    this.imageFile = null;
  }

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteSlider(id):false) ;
  }

  private deleteSlider(id){
    let itemIndex = this.sliders.findIndex( item =>{ return item.id === id });
    let item = this.sliders.filter(res=> res.id = id)[0];
    this.sliders.splice(itemIndex, 1);

    this.setting.deleteSlider(id)
     .subscribe(
       res=> this.snackBar.open('تم حذف السلايدر بنجاح', `` , {duration: 1500}),
        () =>  {
          this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500});
          this.sliders.splice(itemIndex, 0, item);
        }
      );
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
