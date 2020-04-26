import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
title;
  constructor(private route: ActivatedRoute,private router: Router) {
    
   }

  ngOnInit() {
    let initialUrl = this.router.url; 
    initialUrl.includes('url')
    this.detectTitle(initialUrl);
  
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe((res: any )=>{ 
     let url = res.url;

     this.detectTitle(url);
    });
  }

  
  private detectTitle(url){

    switch(url){
      case '/dashboard/control-panel': this.title = 'لوحة التحكم' ; break;
      case '/dashboard/categories': this.title = 'الأقسام' ; break;
      case '/dashboard/products': this.title = 'المنتجات' ; break;
      case '/dashboard/products/add-product': this.title = 'إضافة منتج' ; break;

      case '/dashboard/management': this.title = 'الإدارة' ; break;
      case '/dashboard/chart': this.title = 'المبيعات' ; break;
      case '/dashboard/site-settings': this.title = 'إعدادات الموقع' ; break;
      case '/dashboard/site-settings/edit-slider/1': this.title = 'اعدادات الموقع (السلايدر)' ; break;
      case '/dashboard/site-settings/edit-about/1': this.title = 'إعدادات الموقع (من نحن)' ; break;
      case '/dashboard/site-settings/edit-contacts/1': this.title = 'إعدادات الموقع (تواصل معنا)' ; break;
      case '/dashboard/site-settings/edit-branches/1': this.title = 'إعدادات الموقع (فروعنا)' ; break;
      case '/dashboard/site-settings/edit-services/1': this.title = 'إعدادات الموقع (خداماتنا)' ; break;
     // english site settings
     case '/dashboard/site-settings/edit-slider/2': this.title = 'site settings(slider)' ; break;
     case '/dashboard/site-settings/edit-about/2': this.title = 'site settings(About us)' ; break;
     case '/dashboard/site-settings/edit-contacts/2': this.title = 'site settings(Contacts)' ; break;
     case '/dashboard/site-settings/edit-branches/2': this.title = 'site settings(Branches)' ; break;
     case '/dashboard/site-settings/edit-services/2': this.title = 'site settings(Services)' ; break;
           
      case '/dashboard/settings': this.title = 'الإعدادات' ; break;
      case '/dashboard/settings/app-slider': this.title = 'تعديل السلايدر في الأبلكيشن' ; break;
      case '/dashboard/settings/users': this.title = 'العملاء' ; break;
      case '/dashboard/settings/user-points': this.title = 'نقاط العملاء' ; break;
    }
  }
  

  logOut(){
    localStorage.removeItem('token');
    
    this.router.navigate(['/login']);
  }
}
