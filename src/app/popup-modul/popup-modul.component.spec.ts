import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModulComponent } from './popup-modul.component';

describe('PopupModulComponent', () => {
  let component: PopupModulComponent;
  let fixture: ComponentFixture<PopupModulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupModulComponent]
    });
    fixture = TestBed.createComponent(PopupModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
