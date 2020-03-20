import { async, TestBed } from '@angular/core/testing';
import { PreparingStageOrdersComponent } from './preparing-stage-orders.component';
describe('PreparingStageOrdersComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PreparingStageOrdersComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PreparingStageOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=preparing-stage-orders.component.spec.js.map