import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './components/dashboard/layout/dashboard.component';
import { AddUserComponent } from './admin/components/add-user/add-user.component';
import { ViewUserComponent } from './admin/components/view-user/view-user.component';
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
import { LoginComponent } from './admin/components/login/login.component';
import { ViewProductsCategoriesComponent } from './components/dashboard/view-products/view-products-categories/view-products-categories.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AppSliderComponent } from './components/dashboard/settings/app-slider/app-slider.component';
import { AddSliderComponent } from './components/dashboard/site-setting/add-slider/add-slider.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SalesComponent } from './components/sales/sales.component';
import { RecieveOrderComponent } from './components/recieve-order/recieve-order.component';
import { InProgressOrderComponent } from './components/in-progress-order/in-progress-order.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

    { path: 'dashboard', component: DashboardComponent,  children: [
      { path: '', redirectTo: '/dashboard/control-panel', pathMatch: 'full'}, // admin
      // start control panel
      { path: 'control-panel', component: ControlPanelComponent },
        // end of controll panel 

        { path: 'add-admin', component: AddUserComponent },
        { path: 'edit-user/:id', component: EditUserComponent },

      // categories
      { path: 'categories', component: DashboardCategoriesComponent },

      // products
       { path: 'products', component: ViewProductsCategoriesComponent },
       { path: 'products/add-product', component: AddProductComponent },
       { path: 'products/edit-product/:productId', component: EditProductComponent },
    
      { path: 'management', component: ManagementComponent},
        { path: 'management/add-user', component: AddUserComponent },
      
        { path: 'site-settings', component: SiteSettingsComponent },
        { path: 'site-settings/edit-slider/:lang', component: EditSliderComponent },
        { path: 'site-settings/edit-branches/:lang', component: EditBranchesComponent },
        { path: 'site-settings/edit-about/:lang', component: AboutSectionComponent },
        { path: 'site-settings/edit-services/:lang', component: EditServicesComponent },
        { path: 'site-settings/edit-contacts/:lang', component: EditContactComponent },
        { path: 'site-settings/edit-slider/:lang/add-slider', component: AddSliderComponent },
        
      { path: 'sales', component: SalesComponent },
      { path: 'view', component: ViewUserComponent },
      { path: 'settings', component: SettingsComponent },
        { path: 'settings/app-slider', component: AppSliderComponent },
        { path: 'settings/users', component: UsersSettingsComponent },
      { path: 'addproduct', component: EditProductsComponent },

      // { path: 'view-user', component: ViewUserComponent },
      
    ]
    },

    
    { path: 'dashboard', component: DashboardComponent, children: [ // for sallers
      { path: '', redirectTo: '/dashboard/orders/recieve_orders', pathMatch: 'full'}, // admin
        { path: 'orders/recieve_orders', component: RecieveOrderComponent},
        { path: 'orders/in_progress', component: InProgressOrderComponent},
        { path: '**', component: NotFoundComponent }
      ]
    },


    { path: 'all-products', component: AllProductsComponent },
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
