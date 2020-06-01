import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/layout/dashboard.component';
import { RightmenuComponent } from './components/dashboard/rightmenu/rightmenu.component';
import { AboutSectionComponent } from './components/dashboard/site-settings/about-section/about-section.component';
import { EditBranchesComponent } from './components/dashboard/site-settings/edit-branches/edit-branches.component';
import { EditContactComponent } from './components/dashboark/site-settings/edit-contact/edit-contact.component';
import { EditProductsComponent } from './components/dashboard/view-products/edit-products/edit-products.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddProductComponent } from './components/dashboard/view-products/add-product/add-product.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { DashboardNavbarComponent } from './components/dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardCategoriesComponent } from './components/dashboard/dashboard-categories/dashboard-categories.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { ControlPanelComponent } from './components/dashboard/control-panel/control-panel.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';
import { ManagementComponent } from './components/dashboard/management/management.component';
import { EditOrAddProductComponent } from './components/dashboard/view-products/edit-or-add-product/edit-or-add-product.component';
import { EditProductComponent } from './components/dashboard/view-products/edit-product/edit-product.component';
import { EditSliderComponent } from './components/dashboard/site-settings/edit-slider/edit-slider.component';
import { EditServicesComponent } from './components/dashboard/site-settings/edit-services/edit-services.component';
// import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductsCategoriesComponent } from './components/dashboard/view-products/view-products-categories/view-products-categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AppSliderComponent } from './components/dashboard/settings/app-slider/app-slider.component';
import { NgAlertModule } from '@theo4u/ng-alert';

import { AddSliderComponent } from './components/dashboard/site-setting/add-slider/add-slider.component';
import { SalesComponent } from './components/sales/sales.component'; 
import { ChartWrapperComponent } from './components/admin/chart-wrapper/chart-wrapper.component';
import { HighchartsChartModule }     from 'highcharts-angular';
import { RecieveOrderComponent } from './components/recieve-order/recieve-order.component';
import { InProgressOrderComponent } from './components/in-progress-order/in-progress-order.component';
import { UsersSettingsComponent } from './components/dashboard/management/users-settings/users-settings.component';
import { materialEntryComponents, MaterialModule } from './modules/material/material.module';
import { EditDialogComponent } from './modules/material/components/edit-dialog/edit-dialog.component';
import { DialogComponent } from './modules/material/components/dialog/dialog.component';
import { ProductViewDialogComponent } from './modules/material/components/product-view-dialog/product-view-dialog.component';
import { EditServiceDialogComponent } from './modules/material/components/edit-service-dialog/edit-service-dialog.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditBranchesComponent,
    EditContactComponent,
    EditProductsComponent,
    AddUserComponent,
    ViewUserComponent,
    AddProductComponent,
    SearchComponent, // shared
    DashboardNavbarComponent,
    DashboardCategoriesComponent,
    SettingsComponent,
    ControlPanelComponent,
    SiteSettingsComponent,
    ManagementComponent,
    EditOrAddProductComponent,
    EditProductComponent,
    EditSliderComponent,
    EditServicesComponent,
    UsersSettingsComponent,
    ViewProductsCategoriesComponent,
    EditUserComponent,
    AppSliderComponent,
    EditDialogComponent,
    DialogComponent,
    ProductViewDialogComponent,
    RecieveOrderComponent,
    AddSliderComponent,
    EditServiceDialogComponent,
    SalesComponent,
    ChartWrapperComponent,
    RightmenuComponent,
    AboutSectionComponent,    
    InProgressOrderComponent
  ],

  entryComponents: [
    materialEntryComponents
  ],

imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  CoreModule,
  HighchartsChartModule,
  MaterialModule,
  NgAlertModule,
  MDBBootstrapModule.forRoot()
],
providers:[
  {provide: LocationStrategy, useClass: HashLocationStrategy}
],

bootstrap: [AppComponent]
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);
