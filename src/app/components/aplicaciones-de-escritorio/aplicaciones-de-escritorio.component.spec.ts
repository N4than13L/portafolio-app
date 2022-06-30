import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesDeEscritorioComponent } from './aplicaciones-de-escritorio.component';

describe('AplicacionesDeEscritorioComponent', () => {
  let component: AplicacionesDeEscritorioComponent;
  let fixture: ComponentFixture<AplicacionesDeEscritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionesDeEscritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesDeEscritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
