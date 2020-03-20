import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardCategoriesComponent = class DashboardCategoriesComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userInput = ""; // add section input
        this.categories = [];
    }
    ngOnInit() {
        // get categories as observable
        let getUrl = 'http://fonty.ieeeshasb.org/api/web/categories';
        this.http.get(getUrl).subscribe(response => {
            response.data.forEach(element => {
                //  this.categories.push({id: element.id , name: element.name});       
            });
        });
    }
    delete(id) {
        let url = `http://fonty.ieeeshasb.org/api/web/delete_category/${id}`;
        this.http.delete(url).subscribe(id => console.log(id));
        console.log(this.categories);
        // get the id inside the array
        this.categories.forEach(element => {
        });
    }
    addItem(name) {
        let url = "http://fonty.ieeeshasb.org/api/web/add_category";
        this.http.post(url, { name }).subscribe(res => {
            // get categories and push new item
            let getUrl = 'http://fonty.ieeeshasb.org/api/web/categories';
            this.http.get(getUrl).subscribe(response => {
                response.data.forEach(element => {
                    this.categories.push({ id: element.id, name: element.name });
                });
            });
            console.log(this.categories);
        });
        // 3- cleanup the inputs 
        document.getElementById('cat-name').value = null;
        document.getElementById('cat-name').blur();
        this.userInput = null;
        // 4- cleanup the errors
        // window.location.reload();
    }
};
DashboardCategoriesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard-categories',
        templateUrl: './dashboard-categories.component.html',
        styleUrls: ['./dashboard-categories.component.scss']
    })
], DashboardCategoriesComponent);
export { DashboardCategoriesComponent };
//# sourceMappingURL=dashboard-categories.component.js.map