import { GraphService } from '../../../modules/shared/services/graph.service';
import { Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit {
  AllDaysOnThisMonth = [];
  grapData = [];
  maxSalesNumber;
  
  // @Input('specificMonthNumber') specificMonthNumber;

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options;

  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
 

  constructor(private grap: GraphService){
    this.setGraphValues(); // for prevent reference error
  }

  ngOnInit(){
    this.getThisMonthData();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.getSpecificMonthData();
  // }

  private setGraphValues(){
    this.chartOptions = { 
     credits:{
       enabled: false
     },
     
     title : { text : 'مبيعات العام', style: {
       marginTop: '20px'
     } },
 
     chart: { 
       zoomType: 'x',
       backgroundColor: '#f8f8f8' 
     },

     xAxis:
     {
       title: {
         text: '', 
       },
   
       reversed: true,
       // tickInterval: null,
       categories: ['يناير', 'فبراي','مارس','ابريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
     },
      yAxis: {
      title: {
        text: '',
      },
      min: 0,
      max: this.maxSalesNumber,
      tickInterval: (this.maxSalesNumber / 5) ,
      
      opposite: true,
    },
  
    tooltip:{
      split: true, // for showing x axis while hover
      
      style:{
        color: '#FABF18',
        borderRadius: 50,
        // border: '1px soli',
        fontSize: '1.1rem'
      },

      formatter () {
        return `${this.y} orders `;
      }
    },

    colors: ['gray'],
      
    legend: {
      title : { text:''},
      align: 'center',
      alignColumns: false,
      rtl: true
    }, 
 
    series: [{
      name: "الشهر",
      data: this.grapData,
      type: 'line'
    }]
    }; // required
   }

  private getThisMonthData(){
    this.grap.getCurrentMontData().subscribe(res=> {
      this.grapData = Object.values(res);
      this.maxSalesNumber = Math.max(...this.grapData);

      this.setGraphValues();
    });
  }

  
  // private getSpecificMonthData(){
  //   if( this.specificMonthNumber){
  //     this.grap.getSpecificMOnthData(this.specificMonthNumber).subscribe(res=>{    
  //       this.grapData = Object.values(res);
  //       this.maxSalesNumber = Math.max(...this.grapData);
  //       this.setGraphValues();
  //     });
  //   }
  // }
}
