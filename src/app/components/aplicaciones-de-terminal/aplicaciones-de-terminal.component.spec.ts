import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesDeTerminalComponent } from './aplicaciones-de-terminal.component';

describe('AplicacionesDeTerminalComponent', () => {
  let component: AplicacionesDeTerminalComponent;
  let fixture: ComponentFixture<AplicacionesDeTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionesDeTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesDeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
