import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarFormasDePagoComponent } from './gestionar-formas-de-pago.component';

describe('GestionarFormasDePagoComponent', () => {
  let component: GestionarFormasDePagoComponent;
  let fixture: ComponentFixture<GestionarFormasDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarFormasDePagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarFormasDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
