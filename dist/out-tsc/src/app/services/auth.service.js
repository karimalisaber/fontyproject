import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(form) {
        let url = 'http://fonty.ieeeshasb.org/api/auth/admin_login';
        let email = form.value.email;
        let password = form.value.password;
        return this.http.post(url, { email, password });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map