import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { MatDialog } from '@angular/material';
import { AssetsService } from 'src/app/services/assets.service';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { EditDialogComponent } from 'src/app/components/assets/edit-dialog/edit-dialog.component';
import { EditServiceDialogComponent } from 'src/app/components/assets/edit-service-dialog/edit-service-dialog.component';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss']
})
export class EditServicesComponent implements OnInit {
lang: string = this.route.snapshot.paramMap.get('lang');

services;
imageFile: File;
imgUrl = 'assets/images/upload-image.png';
item: FormData = new FormData();


  constructor(private route: ActivatedRoute, private setting: SiteService, private dialog: MatDialog, private assets: AssetsService) { }

  ngOnInit() {
    this.setting.getServices(this.lang).subscribe( res => this.services = res );
  }

  addService(service){
    
    this.item.append("name", service.title);
    this.item.append("img", this.imageFile, this.imageFile.name);
    this.item.append('lang', this.lang);
    // reset the form here
      this.imgUrl = 'assets/images/upload-image.png';
      this.imageFile = null;

    this.setting.addService(this.item).subscribe(
      (res: any)=> {
        this.services.push(res.data);
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

enableEdit(id){
  this.dialog.open(EditServiceDialogComponent, {
    data: {id, lang: this.lang}
  })
  .afterClosed().subscribe(()=> location.reload());
 }

}
