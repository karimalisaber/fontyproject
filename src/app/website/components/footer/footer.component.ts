import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 lang: string = "1";
  services$;
  branches$;
  contacts$;
  arabic: boolean = true;

  arabFooter = ['خدماتنا', 'فروعنا' , 'معلومات الاتصال' , 'اللغة'];
  englishFooter = ['services', 'branches' , 'contacts', 'languages' ];
  
  items = [...this.arabFooter];

  constructor(private site: SiteService, private router: Router) {
    
  }

  ngOnInit() {
    this. services$ = this.site.getServices();
    this.branches$ = this.site.getbranches();
    this.contacts$ = this.site.getContacts();

    
  }

  setLang(lang){   
    this.site.setLang(lang);
    location.reload();
  }
}
