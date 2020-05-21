import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  imgUrl = 'assets/images/upload-image.png'
  lang: string =  this.route.snapshot.paramMap.get('lang');
  about;
  canEdit = false;
  imageFile: any = null; // for uploaded image
  updateStatus: boolean = false;
  
  item: FormData = new FormData();

  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private site: SiteService) { }
  
  ngOnInit() {
    this.site.getAbout(this.lang).subscribe(res=>{
      this.about = res ;
      this.imgUrl = 'http://fonty.ieeeshasb.org/public/wslider/' + this.about.img ;
    });   
  }

  imageUpload(event){
    if(event.target.files){
      
     this.imageFile = event.target.files[0];
     var render = new FileReader();    
     render.readAsDataURL(this.imageFile);
     render.onload = (event: any) =>  this.imgUrl = event.target.result;
    }
  }

  editAbout(form){
    this.item.append('body', form.brief);
    this.item.append('lang', this.lang);
   
    if(this.imageFile)
     this.item.append("img", this.imageFile, this.imageFile.name);

    this.site.updateAbout(this.item)
    .subscribe(
      () =>  {
        this.canEdit = false;
        this.snackBar.open('تم تعديل البيانات بنجاح', `` , {duration: 1500})
      },
      () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
  }

  enableEditing(brief){
    this.canEdit = true;    
  }
}
