import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit {
  
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
      categories: ['السبت', 'الأحد' , 'الاثنين', 'الثلاثاء' , 'الأربعاء' , 'الخميس', 'الجمعة']
    },
        yAxis: {
        title: {
          text: '',
        },
        min: 0,
        max: 100,
        tickInterval: 20,
        // gridLineWidth: 'HightCharts', // disable grid lines
        
        opposite: true,
        // plotLines: [{
        //   value: 20,
        //   width: 20,
        //   color: '#808080'
        // }]
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
      name: 'أيام الأسبوع',
      data: [1, 2, 3, 4, 5, 6, 7],
      type: 'line'
    }]
  }; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  ngOnInit(){}
  
// chartLabels: Array<any> = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو'];
  // ngOnInit() {
  //   var myChart = new Chart("myChart", {
  //     type: 'line',
  //     data: {
  //         labels: ['يناير', 'فبراير' , 'مارس' , 'ابريل' ,'مايو' ,'يونيو' ,'يوليو' ,'أغسطس' ,'سبتمبر' ,'أكتوبر', 'نوفمبر', 'ديسمبر'],
  //         datasets: [{  
  //             label: 'مبيعات الشهر',
  //             data: [12, 19, 3, 5, 2, 3, 10],
  //             showLine: true,
  //             cubicInterpolationMode: 'monotone',
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //       legend:{
  //       },
  //       tooltips:{
          
  //       },
  //         scales: {
  //             yAxes: [{
  //               position: 'right',
  //                 ticks: {
  //                     // reverse: true,
  //                     beginAtZero: true,
  //                     min: 0,
  //                     max: 100
  //                 }
  //             }],
  //             xAxes:[
  //               {
                  
  //                 // stacked: true          
  //               }
  //             ]
  //         }
  //     }      
  //   });

  // }

}