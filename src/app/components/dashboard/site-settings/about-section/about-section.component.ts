import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  constructor(private site: SiteService) { }

  ngOnInit() {
    
  }

}
