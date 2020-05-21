import { GraphService } from '../../modules/shared/services/graph.service';
import { Component, OnInit, ViewChild } from '@angular/core';

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

  totlPriceOfSpecificMonth: number;

  // specificMonthNumber; // the old implementation

  constructor(private graph: GraphService) {
    this.currentYearMonths  = this.allMonths.slice(0, this.currentMonthNumber + 1);
    
    this.currentMonthName =  this.allMonths[this.currentMonthNumber];
  

  }


  ngOnInit() {
  }

  // passMonth(monthNumber){
  //  this.specificMonthNumber = monthNumber;
  // }

  
  getSpecificMonthData(monthNumber){
      this.graph.getSpecificMOnthData(monthNumber + 1 ).subscribe(res=>{    
        this.totlPriceOfSpecificMonth = (res[0])? res[0].total_price : 0;
      });
    
  }  
}
