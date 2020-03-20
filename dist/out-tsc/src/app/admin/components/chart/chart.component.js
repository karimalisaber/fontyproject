import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ChartComponent = class ChartComponent {
    constructor() {
        this.chartType = 'line';
        this.chartDatasets = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'مبيعات الشهر' },
        ];
        this.chartLabels = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو'];
        this.chartColors = [
            {
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderColor: 'rgba(220,220,220,1)',
                borderWidth: 2,
                pointBackgroundColor: '#fabf18',
                pointBorderColor: '#fabf18',
            }
        ];
        this.chartOptions = {
            responsive: true,
        };
    }
    chartClicked(e) {
    }
    chartHovered(e) {
    }
    ngOnInit() {
    }
};
ChartComponent = tslib_1.__decorate([
    Component({
        selector: 'chart',
        templateUrl: './chart.component.html',
        styleUrls: ['./chart.component.scss']
    })
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map