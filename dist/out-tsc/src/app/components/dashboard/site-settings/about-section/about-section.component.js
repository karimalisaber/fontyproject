import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AboutSectionComponent = class AboutSectionComponent {
    constructor() {
        this.aboutContent = { text: `ك
      أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.ا كنت تحتاج
      إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
      أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن
      يطلع على صورة حقيقية لتصميم الموقع.`,
            imgUrl: 'assets/images/about-img.jpeg',
            title: 'من نحن'
        };
    }
    ngOnInit() {
    }
};
AboutSectionComponent = tslib_1.__decorate([
    Component({
        selector: 'app-about-section',
        templateUrl: './about-section.component.html',
        styleUrls: ['./about-section.component.scss']
    })
], AboutSectionComponent);
export { AboutSectionComponent };
//# sourceMappingURL=about-section.component.js.map