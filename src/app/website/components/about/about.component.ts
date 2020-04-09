import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
about$;
lang: string = this.site.getLangNumber(); 

  constructor(private site: SiteService) { }

  ngOnInit() {
  
  this.about$ = this.site.getSpecificLangAbout(this.lang);
  }

}
