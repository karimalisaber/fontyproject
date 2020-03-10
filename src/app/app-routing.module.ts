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
import { EditContactComponent } from './admin/components/edit-contact/edit-contact.component';
import { ViewProductsComponent } from './components/dashboard/view-products/view-products.component';
import { ViewProductComponent } from './admin/components/view-product/view-product.component';
import { AddUserComponent } from './admin/components/add-user/add-user.component';
import { ViewUserComponent } from './admin/components/view-user/view-user.component';
import { AddProductComponent } from './admin/components/add-product/add-product.component';
import { DashboardCategoriesComponent } from './components/dashboard/dashboard-categories/dashboard-categories.component';
import { ChartComponent } from './admin/components/chart/chart.component';
import { ControlPanelComponent } from './components/dashboard/control-panel/control-panel.component';
import { MembersComponent } from './components/dashboard/members/members.component';
import { SiteSettingsComponent } from './components/dashboard/site-settings/site-settings.component';

const routes: Routes = [

    { path: 'dashboard', component:  DashboardComponent, children: [
      { path: '', component: ControlPanelComponent },
      { path: 'categories', component: DashboardCategoriesComponent },
      { path: 'products', component: ViewProductsComponent },
      { path: 'management', component: MembersComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'site-settings', component: SiteSettingsComponent },
      { path: 'view-product', component: ViewProductComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'view-user', component: ViewUserComponent },
      { path: 'add-product', component: AddProductComponent },
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
        { path: '**', component: NotFoundComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
