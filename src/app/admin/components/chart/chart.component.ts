import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

chartType = 'line';

chartDatasets: Array<any> = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'مبيعات الشهر'},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
];

chartLabels: Array<any> = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو'];

chartColors: Array<any> = [
   {
     backgroundColor: 'rgba(0,0,0,0.1)',
     borderColor: 'rgba(220,220,220,1)',
     borderWidth: 2,
     pointBackgroundColor: '#fabf18',
     pointBorderColor: '#fabf18',

   }
];

chartOptions: any = {
  responsive: true,

};

chartClicked(e: any): void {

}

chartHovered(e: any): void {

}


  ngOnInit() {
  }

}
