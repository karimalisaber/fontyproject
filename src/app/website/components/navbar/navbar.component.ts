import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
arabic: boolean = true;
navArab= ['الرئيسية', 'من نحن' , 'منتجاتنا' , 'فروعنا', 'خدماتنا', 'تواصل معنا'];
navEnglish= ['home', 'about' , 'products', 'branches', 'services', 'contact us' ];
  
navItems = [...this.navArab];

isOpen: boolean = false;

  constructor() {
   }

  ngOnInit() {
  }

  navShow() { // for mobiles
    this.isOpen = !this.isOpen;
  } 

  getLang(){
    this.arabic = true;

    this.navItems= this.arabic? this.navArab : this.navEnglish;
  }
}
