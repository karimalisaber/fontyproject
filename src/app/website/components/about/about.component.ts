import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about;
  aboutLess: String; // read less in the begin

  less:boolean = true;

lang: string = this.site.getLangNumber(); 

  constructor(private site: SiteService) { }

  ngOnInit() {
  
    this.site.getSpecificLangAbout(this.lang)
      .subscribe(res=>{
        this.about = res;

        this.aboutLess = (this.about.body).substring(0, 250);
      });
  }

}
