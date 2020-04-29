import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


chartLabels: Array<any> = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو'];

  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['يناير', 'فبراير' , 'مارس' , 'ابريل' ,'مايو' ,'يونيو' ,'يوليو' ,'أغسطس' ,'سبتمبر' ,'أكتوبر', 'نوفمبر', 'ديسمبر'],
          datasets: [{  
              label: 'مبيعات الشهر',
              data: [12, 19, 3, 5, 2, 3, 10],
              showLine: true,
              cubicInterpolationMode: 'monotone',
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend:{
        },
        tooltips:{
          
        },
          scales: {
              yAxes: [{
                position: 'right',
                  ticks: {
                      // reverse: true,
                      beginAtZero: true,
                      min: 0,
                      max: 100
                  }
              }],
              xAxes:[
                {
                  
                  // stacked: true          
                }
              ]
          }
      }      
    });

  }

}
