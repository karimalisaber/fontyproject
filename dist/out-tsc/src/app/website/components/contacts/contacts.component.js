import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactsComponent = class ContactsComponent {
    constructor(contactsServices) {
        this.contactsServices = contactsServices;
        this.newContacts = this.contactsServices.contacts;
    }
    ngOnInit() {
        this.contactsServices.currentContacts.subscribe(newContacts => newContacts = newContacts);
    }
};
ContactsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contacts',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.scss']
    })
], ContactsComponent);
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map