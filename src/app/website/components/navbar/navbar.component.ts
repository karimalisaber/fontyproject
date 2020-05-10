import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Output('linkClicked') linkClicked = new EventEmitter();


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
  
  scrollTo(e){
    let scrollTarget = e.target.attributes['data-to'].value;
    this.linkClicked.emit(scrollTarget)
  
  }
}
