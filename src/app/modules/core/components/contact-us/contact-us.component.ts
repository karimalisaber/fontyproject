import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lang: string = this.site.getLangNumber();

  arabFooter = ['الاسم', 'البريد الالكتروني' , 'رقم الهاتف' , 'رسالتك'];
  englishFooter = ['name', 'email' , 'phone', 'message' ];
  
  items = (this.lang ==='1')? [...this.arabFooter]: [...this.englishFooter];

  constructor(private site: SiteService) { }

  ngOnInit() {
  }

}
