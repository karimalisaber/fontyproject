import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightmenuComponent } from 'src/app/components/dashboard/rightmenu/rightmenu.component';
import { AboutSectionComponent } from 'src/app/components/dashboard/site-settings/about-section/about-section.component';
import { ProductViewDialogComponent } from '../material/components/product-view-dialog/product-view-dialog.component';
import { AddSliderComponent } from 'src/app/components/dashboard/site-setting/add-slider/add-slider.component';
import { EditServiceDialogComponent } from '../material/components/edit-service-dialog/edit-service-dialog.component';
import { SalesComponent } from 'src/app/components/sales/sales.component';
import { ChartWrapperComponent } from 'src/app/components/admin/chart-wrapper/chart-wrapper.component';
import { RecieveOrderComponent } from 'src/app/components/recieve-order/recieve-order.component';
import { InProgressOrderComponent } from 'src/app/components/in-progress-order/in-progress-order.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    
  ]
})
export class DashboardModule { }
