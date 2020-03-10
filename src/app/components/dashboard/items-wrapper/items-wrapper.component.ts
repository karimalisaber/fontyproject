import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'items-wrapper',
  templateUrl: './items-wrapper.component.html',
  styleUrls: ['./items-wrapper.component.scss'],
})
export class ItemsWrapperComponent implements OnInit {

@Input('type') type ;

  constructor() {

  }

  ngOnInit() {

  }

}
