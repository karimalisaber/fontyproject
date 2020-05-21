import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
import { ItemsService } from './services/items.service';
import { SettingService } from './services/setting.service';
import { AssetsService } from './services/assets.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { OrdersService } from './services/orders.service';
import { GraphService } from './services/graph.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  
  providers: [
    CategoriesService,
    AuthService,
    ItemsService,
    SettingService,
    AssetsService,
    AuthGuardService,
    AdminAuthGuardService,
    OrdersService,
    GraphService  
  ]
  imports: [
    CommonModule,
    FormsModule
  ]
  exports: [
    CommonModule,
    FormsModule
  ]

}
