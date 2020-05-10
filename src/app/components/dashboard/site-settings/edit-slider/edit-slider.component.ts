import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AssetsService } from 'src/app/services/assets.service';
import { ActivatedRoute } from '@angular/router';
import { EditDialogComponent } from 'src/app/modules/material/components/edit-dialog/edit-dialog.component';

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
  
  constructor(
    private route: ActivatedRoute, 
    private site: SiteService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private assets: AssetsService) { }

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
         () =>  this.snackBar.open('تم حذف السلايدر ', `` , {duration: 1500})
        },
         () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
  }

  enableEdit(id){
   this.dialog.open(EditDialogComponent, {
     data: {id, lang: this.lang}
   })
   .afterClosed().subscribe(()=> location.reload());
  }
}
