import { AdminAuthGuardService } from './modules/shared/services/admin-auth-guard.service';
import { AuthGuardService } from './modules/shared/services/auth-guard.service';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { WebsiteComponent } from './modules/core/components/website/website.component';
import { DashboardComponent } from './components/dashboard/layout/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { AddProductComponent } from './components/dashboard/view-products/add-product/add-product.component';
import { DashboardCategoriesComponent } from './components/dashboard/dashboard-categories/dashboard-categories.component';
import { ControlPanelComponent } from './components/dashboard/control-panel/control-panel.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';
import { ManagementComponent } from './components/dashboard/management/management.component';
import { UsersSettingsComponent } from './components/dashboard/management/users-settings/users-settings.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { EditProductsComponent } from './components/dashboard/view-products/edit-products/edit-products.component';
import { EditProductComponent } from './components/dashboard/view-products/edit-product/edit-product.component';
import { EditContactComponent } from './components/dashboark/site-settings/edit-contact/edit-contact.component';
import { EditBranchesComponent } from './components/dashboard/site-settings/edit-branches/edit-branches.component';
import { AboutSectionComponent } from './components/dashboard/site-settings/about-section/about-section.component';
import { EditSliderComponent } from './components/dashboard/site-settings/edit-slider/edit-slider.component';
import { EditServicesComponent } from './components/dashboard/site-settings/edit-services/edit-services.component';
import { LoginComponent } from './modules/core/components/login/login.component';
import { ViewProductsCategoriesComponent } from './components/dashboard/view-products/view-products-categories/view-products-categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AppSliderComponent } from './components/dashboard/settings/app-slider/app-slider.component';
import { AddSliderComponent } from './components/dashboard/site-setting/add-slider/add-slider.component';
import { AllProductsComponent } from './modules/core/components/all-products/all-products.component';
import { SalesComponent } from './components/sales/sales.component';
import { RecieveOrderComponent } from './components/recieve-order/recieve-order.component';
import { InProgressOrderComponent } from './components/in-progress-order/in-progress-order.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

    { path: 'dashboard', component: DashboardComponent,  children: [
      { path: '', canActivate: [AuthGuardService, AdminAuthGuardService],  redirectTo: '/dashboard/control-panel', pathMatch: 'full'}, // admin
      // start control panel
      { path: 'control-panel', component: ControlPanelComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        // end of controll panel 

        { path: 'add-admin', component: AddUserComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },

      // categories
      { path: 'categories', component: DashboardCategoriesComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },

      // products
       { path: 'products', component: ViewProductsCategoriesComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
       { path: 'products/add-product', component: AddProductComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
       { path: 'products/edit-product/:productId', component: EditProductComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
    
      { path: 'management', component: ManagementComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
        { path: 'management/add-user', component: AddUserComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
      
        { path: 'site-settings', component: SiteSettingsComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-slider/:lang', component: EditSliderComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-branches/:lang', component: EditBranchesComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-about/:lang', component: AboutSectionComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-services/:lang', component: EditServicesComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-contacts/:lang', component: EditContactComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        { path: 'site-settings/edit-slider/:lang/add-slider', component: AddSliderComponent, canActivate: [AuthGuardService,AdminAuthGuardService] },
        
      { path: 'sales', component: SalesComponent, canActivate: [AuthGuardService, AdminAuthGuardService]  },
      { path: 'view', component: ViewUserComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
        { path: 'settings/app-slider', component: AppSliderComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
        { path: 'settings/users', component: UsersSettingsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'addproduct', component: EditProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      // { path: 'view-user', component: ViewUserComponent },      
    
      { path: 'orders/recieve_orders', component: RecieveOrderComponent, canActivate:[AuthGuardService]},
      { path: 'orders/in_progress', component: InProgressOrderComponent,canActivate:[AuthGuardService]},
    ]
    },

    { path: 'all-products', component: AllProductsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '', component: WebsiteComponent, children: [    
        { path: '**', redirectTo: '/', pathMatch: 'full' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
