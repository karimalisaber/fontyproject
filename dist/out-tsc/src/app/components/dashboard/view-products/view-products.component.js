import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewProductsComponent = class ViewProductsComponent {
    constructor() {
        this.products = [{ id: 1, image: '', name: '', pre: '', price: '', delete: '', edit: '' }, { id: 1, image: '', name: '', pre: '', price: '', delete: '', edit: '' }, { id: 1, image: '', name: '', pre: '', price: '', delete: '', edit: '' }];
    }
    ngOnInit() {
    }
};
ViewProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-products',
        templateUrl: './view-products.component.html',
        styleUrls: ['./view-products.component.scss']
    })
], ViewProductsComponent);
export { ViewProductsComponent };
//# sourceMappingURL=view-products.component.js.map