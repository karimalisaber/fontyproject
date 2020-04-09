import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

lang: string = this.site.getLangNumber();

navArab= ['الرئيسية', 'من نحن' , 'منتجاتنا' , 'فروعنا', 'خدماتنا', 'تواصل معنا'];
navEnglish= ['home', 'about' , 'products', 'branches', 'services', 'contact us' ];
  
navItems = (this.lang ==='1')? [...this.navArab] : [...this.navEnglish] ;

isOpen: boolean = false;

  constructor(private site: SiteService) {
   }

  ngOnInit() {
  }

  navShow() { // for mobiles
    this.isOpen = !this.isOpen;
  } 
}
