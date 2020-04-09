import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  imgUrl = 'assets/images/upload-image.png'
  lang: string =  this.route.snapshot.paramMap.get('lang');
  about;
  imageFile: any = null; // for uploaded image
  updateStatus: boolean = false;
  changeImage: boolean = false;
  item: FormData = new FormData();

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private site: SiteService) { }
  
  ngOnInit() {
    this.site.getAbout(this.lang).subscribe(res=>{
      this.about = res ;
      this.imgUrl = 'http://fonty.ieeeshasb.org/public/wslider/' + this.about.img ;
    });   
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

  editAbout(form){
    this.item.append('body', form.brief);
    this.item.append('lang', this.lang);
    if (this.imageFile) this.item.append("img", this.imageFile, this.imageFile.name);
    
    this.site.updateAbout(this.item)
    .subscribe(
      ()=> this.dialog.open(SuccesPostDialogComponent),
      () => this.dialog.open(ErrorDialogComponent) );
  }

}
