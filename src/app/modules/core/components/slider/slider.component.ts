import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliders;
  subscription: Subscription;
  
  constructor(private cdRef: ChangeDetectorRef, private site: SiteService) { }
  
  ngOnInit() {
    this.subscription = this.site.getSpecificLangSliders().subscribe(res=> {
      this.sliders = res;
      setTimeout(() => {
        document.querySelector('#carousel-item').classList.add('active');
        document.querySelector('#indicator').classList.add('active');
      }, 200)
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
