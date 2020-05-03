import { NgModule } from '@angular/core';
import { MatDialogModule, MatMenuModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatExpansionModule, MatFormFieldControl, MatAccordion } from '@angular/material';
import { SuccesPostDialogComponent } from '../components/assets/succes-post-dialog/succes-post-dialog.component';
import { DialogComponent } from '../components/assets/dialog/dialog.component';
import { SuccessDialogComponent } from '../components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../components/assets/error-dialog/error-dialog.component';
import { EditDialogComponent } from '../components/assets/edit-dialog/edit-dialog.component';
import { ProductViewDialogComponent } from '../components/assets/product-view-dialog/product-view-dialog.component';
import { EditServiceDialogComponent } from '../components/assets/edit-service-dialog/edit-service-dialog.component';



const MaterialComponents =[
  MatDialogModule,
  MatMenuModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatExpansionModule,
  
]

export const materialEntryComponents = [
    SuccesPostDialogComponent,
    DialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    EditDialogComponent,
    ProductViewDialogComponent,
    EditServiceDialogComponent,
]

@NgModule({
  declarations: [
  ],

  imports: [ MaterialComponents ],
  
  exports: [ 
    MaterialComponents,
  ],
})
export class MaterialModule { }
