import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { MatDialog } from '@angular/material';
import { AssetsService } from 'src/app/services/assets.service';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss']
})
export class EditServicesComponent implements OnInit {
arabic: boolean = true; 
services;
imageFile: File;
imgUrl = 'assets/images/upload-image.png';
item: FormData = new FormData();

  constructor(private setting: SiteService, private dialog: MatDialog, private assets: AssetsService) { }

  ngOnInit() {
    this.setting.getServices().subscribe( res => this.services = res );
  }

  addService(service){
    console.log(service);
    
    this.item.append("name", service.title);
    this.item.append("img", this.imageFile, this.imageFile.name);
   
    // reset the form here
      this.imgUrl = 'assets/images/upload-image.png';
      this.imageFile = null;

    this.setting.addService(this.item).subscribe(
      res=> {
        this.dialog.open(SuccesPostDialogComponent);        
      },
      error=> this.dialog.open(ErrorDialogComponent));
  }

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteService(id):false) ;
  }

  private deleteService(id){
     this.setting.deleteService(id)
     .subscribe(
       res=> {
         let itemIndex = this.services.findIndex( item =>{ return item.id === id });
         this.services.splice(itemIndex, 1);
         this.dialog.open(SuccessDialogComponent);
    }, error=> this.dialog.open(ErrorDialogComponent));
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
