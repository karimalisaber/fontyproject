import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit {
AllDaysOnThisMonth = [];

  Highcharts: typeof Highcharts = Highcharts; // required

  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
 

   chartOptions: Highcharts.Options = { 
    credits:{
      enabled: false
    },
    
    title : { text : 'مبيعات الشهر', style: {
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
      categories: this.AllDaysOnThisMonth
    },
        yAxis: {
        title: {
          text: '',
        },
        min: 0,
        max: 100,
        tickInterval: 20,
        
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
          return `${this.y} ريال `;
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
      name: 'اليوم',
      data: [1, 2, 3, 4, 5, 6, 7,8,9,9,9,10,5,2,4,52,4,15,45,15,54,54,54,54,15,51,42,18,42,0,4],
      type: 'line'
    }]
    }; // required
  
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  ngOnInit(){
   let daysInthisMonth = this.daysInThisMonth();
   for(let i = 0; i<daysInthisMonth; i++){
    this.AllDaysOnThisMonth[i] = i +1; 
   }


  }

  daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }
}
