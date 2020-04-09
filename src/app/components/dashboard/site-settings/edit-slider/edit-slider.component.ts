import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { AssetsService } from 'src/app/services/assets.service';
import { EditDialogComponent } from 'src/app/components/assets/edit-dialog/edit-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-slider',
  templateUrl: './edit-slider.component.html',
  styleUrls: ['./edit-slider.component.scss']
})
export class EditSliderComponent implements OnInit {
  lang: string = this.route.snapshot.paramMap.get('lang'); // you need it to pass to the dialog box
  
  sliders;
  arabicSliders;
  englishSliders;
  subscription: Subscription;
  
  constructor(private route: ActivatedRoute, private site: SiteService, private dialog: MatDialog,private assets: AssetsService) { }

  ngOnInit() {
    this.subscription = this.site.getSliders(this.lang).subscribe(res => {
      this.sliders = res;
    });
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

  enableEdit(id){
   this.dialog.open(EditDialogComponent, {
     data: {id, lang: this.lang}
   })
   .afterClosed().subscribe(()=> location.reload());
  }
}
