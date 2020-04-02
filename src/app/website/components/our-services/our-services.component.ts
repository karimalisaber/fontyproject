import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
services$;
arabic: boolean = true;

  constructor(private service: SiteService) { }

  ngOnInit() {
    this.services$ = this.service.getServices();
  }

}
