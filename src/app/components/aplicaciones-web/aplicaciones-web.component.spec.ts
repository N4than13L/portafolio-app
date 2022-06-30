import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesWebComponent } from './aplicaciones-web.component';

describe('AplicacionesWebComponent', () => {
  let component: AplicacionesWebComponent;
  let fixture: ComponentFixture<AplicacionesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionesWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
