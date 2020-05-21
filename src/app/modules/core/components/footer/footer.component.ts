import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
lang: string = this.site.getLangNumber();
  phone;
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

    this.site.getContacts(this.lang).pipe(take(1)).subscribe(res=> this.phone = res.phone.split('\n'));
  }

  setLang(lang){   
    this.site.setLang(lang);
    location.reload();
  }
}
