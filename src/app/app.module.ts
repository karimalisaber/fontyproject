import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/components/home/home.component';
import { AboutComponent } from './website/components/about/about.component';
import { ProductsComponent } from './website/components/products/products.component';
import { BranchesComponent } from './website/components/branches/branches.component';
import { OurServicesComponent } from './website/components/our-services/our-services.component';
import { NotFoundComponent } from './website/components/not-found/not-found.component';
import { NavbarComponent } from './website/components/navbar/navbar.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { ProductDetailsComponent } from './website/components/product-details/product-details.component';
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
import { ContactsComponent } from './website/components/contacts/contacts.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';
import { ControlPanelIconComponent } from './components/dashboard/control-panel/control-panel-icon/control-panel-icon.component';
import { RecievedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/recieved-orders/recieved-orders.component';
import { AllOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/all-orders/all-orders.component';
import { OrdersComponent } from './components/dashboard/control-panel/contro-panel-route/orders/orders.component';
import { CancelleOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/cancelle-orders/cancelle-orders.component';
import { FinishedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/finished-orders/finished-orders.component';
import { PreparingStageOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/preparing-stage-orders/preparing-stage-orders.component';
import { BranchesSettingsComponent } from './components/dashboard/management/branches-settings/branches-settings.component';
import { UsersSettingsComponent } from './components/dashboard/management/users-settings/users-settings.component';
import { AdminsSettingsComponent } from './components/dashboard/management/admins-settings/admins-settings.component';
import { ManagementComponent } from './components/dashboard/management/management.component';
import { EditOrAddProductComponent } from './components/dashboard/view-products/edit-or-add-product/edit-or-add-product.component';
import { EditProductComponent } from './components/dashboard/view-products/edit-product/edit-product.component';
import { EditSliderComponent } from './components/dashboard/site-settings/edit-slider/edit-slider.component';
import { EditServicesComponent } from './components/dashboard/site-settings/edit-services/edit-services.component';
import { UserPointsComponent } from './components/dashboard/settings/user-points/user-points.component';
import { BranchDetailsComponent } from './components/management/branches-settings/branch-details/branch-details.component';
import { OffersComponent } from './components/dashboard/settings/offers/offers.component';
import { EditOffersComponent } from './components/dashboard/settings/edit-offers/edit-offers.component';
// import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    ProductDetailsComponent,
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
    ContactsComponent,
    SiteSettingsComponent,
    ControlPanelIconComponent,
    RecievedOrdersComponent,
    AllOrdersComponent,
    OrdersComponent,
    CancelleOrdersComponent,
    FinishedOrdersComponent,
    PreparingStageOrdersComponent,
    BranchesSettingsComponent,
    UsersSettingsComponent,
    AdminsSettingsComponent,
    ManagementComponent,
    EditOrAddProductComponent,
    EditProductComponent,
    EditSliderComponent,
    EditServicesComponent,
    UserPointsComponent,
    BranchDetailsComponent,
    OffersComponent,
    EditOffersComponent
  ],

imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  // CustomFormsModule,
  MDBBootstrapModule.forRoot()
],

providers: [
  CategoriesService,
  AuthService,
  // AuthGuardService 
],

bootstrap: [AppComponent]
})
export class AppModule { }
