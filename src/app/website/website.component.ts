import { Component, OnInit, Output } from '@angular/core';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  lang: string = this.site.getLangNumber();


  constructor(private site: SiteService) { }

  ngOnInit() {
    
  }

  scroll(event){
    let el = document.getElementById(event);
    el.scrollIntoView({behavior:"smooth"});
  }

}
