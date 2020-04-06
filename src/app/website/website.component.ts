import { Component, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  services$;
  branches$;
  contacts$;
  arabic: boolean = true;

  arabFooter = ['خدماتنا', 'فروعنا' , 'معلومات الاتصال' , 'اللغة'];
  englishFooter = ['services', 'branches' , 'contacts', 'languages' ];
  
  items = [...this.arabFooter];

  constructor(private site: SiteService) {
    
  }

  ngOnInit() {
    this. services$ = this.site.getServices();
    this.branches$ = this.site.getbranches();
    this.contacts$ = this.site.getContacts();
  }

  setLang(lang){
    this.site.setLang(lang);
  }

}
