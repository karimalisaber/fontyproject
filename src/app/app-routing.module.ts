import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/components/home/home.component';
import { AboutComponent } from './website/components/about/about.component';
import { OurServicesComponent } from './website/components/our-services/our-services.component';
import { ProductsComponent } from './website/components/products/products.component';
import { BranchesComponent } from './website/components/branches/branches.component';
import { NotFoundComponent } from './website/components/not-found/not-found.component';
import { ProductDetailsComponent } from './website/components/product-details/product-details.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './components/dashboard/layout/dashboard.component';
import { ViewProductsComponent } from './components/dashboard/view-products/view-products.component';
import { AddUserComponent } from './admin/components/add-user/add-user.component';
import { ViewUserComponent } from './admin/components/view-user/view-user.component';
import { AddProductComponent } from './components/dashboard/view-products/add-product/add-product.component';
import { DashboardCategoriesComponent } from './components/dashboard/dashboard-categories/dashboard-categories.component';
import { ChartComponent } from './admin/components/chart/chart.component';
import { ControlPanelComponent } from './components/dashboard/control-panel/control-panel.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';
import { RecievedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/recieved-orders/recieved-orders.component';
import { AllOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/all-orders/all-orders.component';
import { FinishedOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/finished-orders/finished-orders.component';
import { PreparingStageOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/preparing-stage-orders/preparing-stage-orders.component';
import { CancelleOrdersComponent } from './components/dashboard/control-panel/contro-panel-route/cancelle-orders/cancelle-orders.component';
import { ManagementComponent } from './components/dashboard/management/management.component';
import { AdminsSettingsComponent } from './components/dashboard/management/admins-settings/admins-settings.component';
import { BranchesSettingsComponent } from './components/dashboard/management/branches-settings/branches-settings.component';
import { UsersSettingsComponent } from './components/dashboard/management/users-settings/users-settings.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { EditProductsComponent } from './components/dashboard/view-products/edit-products/edit-products.component';
import { EditProductComponent } from './components/dashboard/view-products/edit-product/edit-product.component';
import { ContactsComponent } from './website/components/contacts/contacts.component';
import { EditContactComponent } from './components/dashboark/site-settings/edit-contact/edit-contact.component';
import { EditBranchesComponent } from './components/dashboard/site-settings/edit-branches/edit-branches.component';
import { AboutSectionComponent } from './components/dashboard/site-settings/about-section/about-section.component';
import { EditSliderComponent } from './components/dashboard/site-settings/edit-slider/edit-slider.component';
import { EditServicesComponent } from './components/dashboard/site-settings/edit-services/edit-services.component';
import { UserPointsComponent } from './components/dashboard/settings/user-points/user-points.component';
import { BranchDetailsComponent } from './components/management/branches-settings/branch-details/branch-details.component';
import { EditOffersComponent } from './components/dashboard/settings/edit-offers/edit-offers.component';

const routes: Routes = [
    { path: 'dashboard', component:  DashboardComponent, children: [
      { path: '', component: ControlPanelComponent},
        { path: 'received-orders', component: RecievedOrdersComponent },
        { path: 'all-orders', component: AllOrdersComponent },
        { path: 'finished-orders', component: FinishedOrdersComponent },
        { path: 'preparing-stage-orders', component: PreparingStageOrdersComponent },
        { path: 'cancelled-orders', component: CancelleOrdersComponent },


      { path: 'categories', component: DashboardCategoriesComponent },
      { path: 'products', component: ViewProductsComponent },
        { path: 'products/add-product', component: AddProductComponent },
        { path: 'products/edit-product', component: EditProductComponent },
      { path: 'management', component: ManagementComponent},
        { path: 'management/admins', component: AdminsSettingsComponent },
        { path: 'management/branches', component: BranchesSettingsComponent },
        { path: 'management/branch-details', component: BranchDetailsComponent },
      { path: 'site-settings', component: SiteSettingsComponent },
        { path: 'site-settings/edit-slider', component: EditSliderComponent },
        { path: 'site-settings/edit-branches', component: EditBranchesComponent },
        { path: 'site-settings/edit-about', component: AboutSectionComponent },
        { path: 'site-settings/edit-services', component: EditServicesComponent },
        { path: 'site-settings/edit-contacts', component: EditContactComponent },
        

      { path: 'chart', component: ChartComponent },
      { path: 'view', component: ViewUserComponent },
      { path: 'settings', component: SettingsComponent },
        { path: 'settings/user-points', component: UserPointsComponent },
        { path: 'settings/users', component: UsersSettingsComponent },
        { path: 'settings/edit-offers', component: EditOffersComponent },

      { path: 'addproduct', component: EditProductsComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'view-user', component: ViewUserComponent },
      { path: '**', component: NotFoundComponent }
    ]
    },

    { path: '', component: WebsiteComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'our-services', component: OurServicesComponent },
        { path: 'our-products', component: ProductsComponent },
        { path: 'our-branches', component: BranchesComponent },
        { path: 'product-details', component: ProductDetailsComponent },
        { path: 'contact', component: ContactsComponent },
        { path: '**', component: NotFoundComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
