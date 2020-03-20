import { async, TestBed } from '@angular/core/testing';
import { EditOrAddProductComponent } from './edit-or-add-product.component';
describe('EditOrAddProductComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditOrAddProductComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EditOrAddProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-or-add-product.component.spec.js.map