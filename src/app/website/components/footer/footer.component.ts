import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
lang: string = this.site.getLangNumber();
 
  services$;
  branches$;
  contacts$;
  
  arabFooter = ['خدماتنا', 'فروعنا' , 'معلومات الاتصال' , 'اللغة'];
  englishFooter = ['services', 'branches' , 'contacts', 'languages' ];
  
  items = (this.lang ==='1')? [...this.arabFooter] : [...this.englishFooter];

  constructor(private site: SiteService, private router: Router) {
    
  }

  ngOnInit() {
    this. services$ = this.site.getSpecificLangServices();
    this.branches$ = this.site.getSpecificLangbranches();
    this.contacts$ = this.site.getContacts(this.lang);
  }

  setLang(lang){   
    this.site.setLang(lang);
    location.reload();
  }
}
