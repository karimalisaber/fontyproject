import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
    navShow() {
        this.isOpen = !this.isOpen;
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map