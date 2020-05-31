import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiteService } from 'src/app/modules/shared/services/site.service';

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
         let slider = document.querySelector('#carousel-item');
         if (slider) slider.classList.add('active') ;
         let indicator = document.querySelector('#indicator');
         if (indicator) indicator.classList.add('active')
      }, 200)
    });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
