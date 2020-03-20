import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let ContactsService = class ContactsService {
    constructor() {
        this.contacts = new BehaviorSubject({
            address: '',
            phone: '',
            email: ''
        });
        this.currentContacts = this.contacts.asObservable();
    }
    changeContacts(newContacts) {
        this.contacts.next(newContacts);
    }
};
ContactsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ContactsService);
export { ContactsService };
//# sourceMappingURL=contacts.service.js.map