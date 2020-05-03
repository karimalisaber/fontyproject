import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  panelOpenState = false;
  allMonths: Array<string> = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
  currentYear = new Date().getFullYear();
  currentMonthNumber = new Date().getMonth();
  currentYearMonths;
  currentMonthName: string;

  constructor() {
    this.currentYearMonths  = this.allMonths.slice(0, this.currentMonthNumber + 1);
    
    this.currentMonthName =  this.allMonths[this.currentMonthNumber];
  }


  ngOnInit() {
  }

}
