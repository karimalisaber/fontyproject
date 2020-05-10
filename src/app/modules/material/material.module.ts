import { NgModule } from '@angular/core';
import { MatDialogModule, MatMenuModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatExpansionModule, MatFormFieldControl, MatAccordion, MatSnackBarModule } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { ProductViewDialogComponent } from './components/product-view-dialog/product-view-dialog.component';
import { EditServiceDialogComponent } from './components/edit-service-dialog/edit-service-dialog.component';

const MaterialComponents =[
  MatDialogModule,
  MatMenuModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatSnackBarModule,
]

export const materialEntryComponents = [
    DialogComponent,
    EditDialogComponent,
    ProductViewDialogComponent,
    EditServiceDialogComponent
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
