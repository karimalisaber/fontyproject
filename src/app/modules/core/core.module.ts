import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/admin/components/login/login.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { WebsiteComponent } from 'src/app/website/website.component';
import { AllProductsComponent } from 'src/app/components/all-products/all-products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { BranchesComponent } from './components/branches/branches.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SliderComponent } from './components/slider/slider.component';

const coreComponents =[
  AboutComponent,
  ProductsComponent,
  BranchesComponent,
  OurServicesComponent,
  NotFoundComponent,
  FooterComponent,
  ContactUsComponent,
  SliderComponent,
]

@NgModule({
  declarations: [
    coreComponents
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    coreComponents
  ]
})
export class CoreModule { }
