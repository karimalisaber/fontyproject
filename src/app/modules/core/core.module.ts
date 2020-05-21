import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from 'src/app/modules/core/components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from 'src/app/modules/core/components/all-products/all-products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { BranchesComponent } from './components/branches/branches.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WebsiteComponent } from './components/website/website.component';

const coreComponents =[
  AboutComponent,
  ProductsComponent,
  BranchesComponent,
  OurServicesComponent,
  NotFoundComponent,
  FooterComponent,
  ContactUsComponent,
  SliderComponent,
  LoginComponent,
  NavbarComponent,
  WebsiteComponent,
  AllProductsComponent  
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
