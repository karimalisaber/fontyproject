import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor() {
        this.details = [
            { name: 'برجر', price: '50', time: '30 دقيقة' },
            { name: 'لحمة', price: '20', time: '60 دقيقة' },
            { name: 'فراخ', price: '30', time: '20 دقيقة' },
            { name: 'بطاطس', price: '225', time: '20 دقيقة' }
        ];
    }
    ngOnInit() {
    }
};
ProductDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.scss']
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map