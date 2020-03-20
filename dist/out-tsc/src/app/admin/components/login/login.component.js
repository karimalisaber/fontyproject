import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.admin = false;
    }
    ngOnInit() {
    }
    login(form) {
        this.auth.login(form).subscribe((resl) => {
            if (resl.status === true) {
                if (resl.data.role === '0')
                    this.admin = true;
                if (this.admin !== true) {
                    this.router.navigate(['/dashboard/admin']);
                }
                else {
                    this.router.navigate(['/dashboard']);
                    return true;
                }
            }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map