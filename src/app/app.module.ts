import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, ChartsModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './website/components/about/about.component';
import { ProductsComponent } from './website/components/products/products.component';
import { BranchesComponent } from './website/components/branches/branches.component';
import { OurServicesComponent } from './website/components/our-services/our-services.component';
import { NotFoundComponent } from './website/components/not-found/not-found.component';
import { NavbarComponent } from './website/components/navbar/navbar.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './admin/components/login/login.component';
import { DashboardComponent } from './components/dashboard/layout/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { RightmenuComponent } from './components/dashboard/rightmenu/rightmenu.component';
import { AboutSectionComponent } from './components/dashboard/site-settings/about-section/about-section.component';
import { EditBranchesComponent } from './components/dashboard/site-settings/edit-branches/edit-branches.component';
import { EditContactComponent } from './components/dashboark/site-settings/edit-contact/edit-contact.component';
import { EditProductsComponent } from './components/dashboard/view-products/edit-products/edit-products.component';
import { ViewProductsComponent } from './components/dashboard/view-products/view-products.component';
import { AddUserComponent } from './admin/components/add-user/add-user.component';
import { ViewUserComponent } from './admin/components/view-user/view-user.component';
import { AddProductComponent } from './components/dashboard/view-products/add-product/add-product.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { ChartComponent } from './admin/components/chart/chart.component';
import { DashboardNavbarComponent } from './components/dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardCategoriesComponent } from './components/dashboard/dashboard-categories/dashboard-categories.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { ControlPanelComponent } from './components/dashboard/control-panel/control-panel.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';
import { ControlPanelIconComponent } from './components/dashboard/control-panel/control-panel-icon/control-panel-icon.component';
import { RecievedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/recieved-orders/recieved-orders.component';
import { AllOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/all-orders/all-orders.component';
import { OrdersComponent } from './components/dashboard/control-panel/contro-panel-route/orders/orders.component';
import { CancelleOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/cancelle-orders/cancelle-orders.component';
import { FinishedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/finished-orders/finished-orders.component';
import { PreparingStageOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/preparing-stage-orders/preparing-stage-orders.component';
import { UsersSettingsComponent } from './components/dashboard/management/users-settings/users-settings.component';
import { ManagementComponent } from './components/dashboard/management/management.component';
import { EditOrAddProductComponent } from './components/dashboard/view-products/edit-or-add-product/edit-or-add-product.component';
import { EditProductComponent } from './components/dashboard/view-products/edit-product/edit-product.component';
import { EditSliderComponent } from './components/dashboard/site-settings/edit-slider/edit-slider.component';
import { EditServicesComponent } from './components/dashboard/site-settings/edit-services/edit-services.component';
import { UserPointsComponent } from './components/dashboard/settings/user-points/user-points.component';
import { OffersComponent } from './components/dashboard/settings/offers/offers.component';
import { EditOffersComponent } from './components/dashboard/settings/edit-offers/edit-offers.component';
// import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CategoriesService } from './services/categories.service';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ViewProductsCategoriesComponent } from './components/dashboard/view-products/view-products-categories/view-products-categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ItemsService } from './services/items.service';
import { AppSliderComponent } from './components/dashboard/settings/app-slider/app-slider.component';
import { AddOfferComponent } from './components/dashboard/settings/add-offer/add-offer.component';
import { SettingService } from './services/setting.service';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './components/assets/dialog/dialog.component';
import { ErrorDialogComponent } from './components/assets/error-dialog/error-dialog.component';
import { SuccessDialogComponent} from './components/assets/success-dialog/success-dialog.component';
import { AssetsService } from './services/assets.service';
import { EditDialogComponent } from './components/assets/edit-dialog/edit-dialog.component';
import { SuccesPostDialogComponent } from './components/assets/succes-post-dialog/succes-post-dialog.component';
import { MatMenuModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ContactUsComponent } from './new/contact-us/contact-us.component';
import { SliderComponent } from './new/slider/slider.component';
import { FeedbackComponent } from './components/dashboard/feedback/feedback.component';
import { SalerDashboardComponent } from './components/saler-dashboard/saler-dashboard.component';
import { SallerDashboardComponent } from './components/saller-dashboard/saller-dashboard.component';
import { OrdersActionComponent } from './components/saller-dashboard/orders-action/orders-action.component';

// import {NgxTypedJsModule} from 'ngx-typed-js';
import { ProductViewDialogComponent } from './components/assets/product-view-dialog/product-view-dialog.component';
import { AddSliderComponent } from './components/dashboard/site-setting/add-slider/add-slider.component';
import { EditServiceDialogComponent } from './components/assets/edit-service-dialog/edit-service-dialog.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { OrdersService } from './services/orders.service';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    BranchesComponent,
    OurServicesComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    WebsiteComponent,
    DashboardComponent,
    AdminComponent,
    RightmenuComponent,
    AboutSectionComponent,
    EditBranchesComponent,
    EditContactComponent,
    EditProductsComponent,
    ViewProductsComponent,
    AddUserComponent,
    ViewUserComponent,
    AddProductComponent,
    SearchComponent,
    ChartComponent,
    DashboardNavbarComponent,
    DashboardCategoriesComponent,
    SettingsComponent,
    ControlPanelComponent,
    SiteSettingsComponent,
    ControlPanelIconComponent,
    RecievedOrdersComponent,
    AllOrdersComponent,
    OrdersComponent,
    CancelleOrdersComponent,
    FinishedOrdersComponent,
    PreparingStageOrdersComponent,
    UsersSettingsComponent,
    ManagementComponent,
    EditOrAddProductComponent,
    EditProductComponent,
    EditSliderComponent,
    EditServicesComponent,
    UserPointsComponent,
    OffersComponent,
    EditOffersComponent,
    ViewProductsCategoriesComponent,
    EditUserComponent,
    AppSliderComponent,
    AddOfferComponent,
    DialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    EditDialogComponent,
    SuccesPostDialogComponent,
    ContactUsComponent,
    SliderComponent,
    FeedbackComponent,
    SalerDashboardComponent,
    SallerDashboardComponent,
    OrdersActionComponent,
    ProductViewDialogComponent,
    AddSliderComponent,
    EditServiceDialogComponent,
    AllProductsComponent,
  ],
entryComponents: [
  SuccesPostDialogComponent,
  DialogComponent,
  SuccessDialogComponent,
  ErrorDialogComponent,
  EditDialogComponent,
  ProductViewDialogComponent,
  EditServiceDialogComponent
],

imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  MatDialogModule,
  MatMenuModule,
  MatButtonModule,
  ChartsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  // NgbModule,
  // CustomFormsModule,
  // NgxTypedJsModule,
  MDBBootstrapModule.forRoot()
],

providers: [
  CategoriesService,
  AuthService,
  ItemsService,
  SettingService,
  AssetsService,
  AuthGuardService,
  AdminAuthGuardService,
  OrdersService 
],

bootstrap: [AppComponent]
})
export class AppModule { }
