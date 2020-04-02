import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { AssetsService } from 'src/app/services/assets.service';
import { EditDialogComponent } from 'src/app/components/assets/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-edit-slider',
  templateUrl: './edit-slider.component.html',
  styleUrls: ['./edit-slider.component.scss']
})
export class EditSliderComponent implements OnInit {
  arabic: boolean =true;
  sliders;
  imgUrl = 'assets/images/default-slider.png';
  imageFile: any = null; // for uploaded image
  item: FormData = new FormData();
  subscription: Subscription;
  
  constructor(private site: SiteService, private dialog: MatDialog,private assets: AssetsService) { }

  ngOnInit() {
    this.subscription = this.site.getSliders().subscribe(res => this.sliders = res);
  }


  addSlider(slider){
    this.item.append("title", slider.title);
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
  

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteSlider(id):false) ;
  }

  private deleteSlider(id){
     this.site.deleteSlider(id)
     .subscribe(
       res=> {
         let itemIndex = this.sliders.findIndex( item =>{ return item.id === id });
         this.sliders.splice(itemIndex, 1);
         this.dialog.open(SuccessDialogComponent);
    }, error=> this.dialog.open(ErrorDialogComponent));
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

  enableEdit(id){
   this.dialog.open(EditDialogComponent, {
     data: id
   })
   .afterClosed().subscribe(()=> location.reload());
  }
}
