import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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


}
