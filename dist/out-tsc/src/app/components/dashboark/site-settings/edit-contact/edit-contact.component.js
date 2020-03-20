import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let EditContactComponent = class EditContactComponent {
    constructor(contactsServices) {
        this.contactsServices = contactsServices;
        this.newContacts = {
            address: '',
            phone: '',
            email: ''
        };
    }
    ngOnInit() {
        this.contactsServices.currentContacts.subscribe(newContacts => newContacts = newContacts);
    }
    addContacts(form) {
        console.log(this.newContacts);
        this.newContacts.address = form.value;
        this.newContacts.phone = form.value;
        this.newContacts.email = form.value;
    }
};
EditContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit-contact',
        templateUrl: './edit-contact.component.html',
        styleUrls: ['./edit-contact.component.scss']
    })
], EditContactComponent);
export { EditContactComponent };
//# sourceMappingURL=edit-contact.component.js.map