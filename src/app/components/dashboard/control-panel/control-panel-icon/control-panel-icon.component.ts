import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'control-panel-icon',
  templateUrl: './control-panel-icon.component.html',
  styleUrls: ['./control-panel-icon.component.scss']
})
export class ControlPanelIconComponent implements OnInit {
  @Input('type') type;

  constructor() { }
  ngOnInit() {
  }

}
