import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
services$;
lang: string = this.site.getLangNumber();

  constructor(private site: SiteService) { }

  ngOnInit() {
    this.services$ = this.site.getSpecificLangServices();
  }

}
