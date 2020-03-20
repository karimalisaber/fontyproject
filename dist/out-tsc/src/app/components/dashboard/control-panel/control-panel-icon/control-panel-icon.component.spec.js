import { async, TestBed } from '@angular/core/testing';
import { ControlPanelIconComponent } from './control-panel-icon.component';
describe('ControlPanelIconComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ControlPanelIconComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ControlPanelIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=control-panel-icon.component.spec.js.map