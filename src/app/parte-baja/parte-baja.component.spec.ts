import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteBajaComponent } from './parte-baja.component';

describe('ParteBajaComponent', () => {
  let component: ParteBajaComponent;
  let fixture: ComponentFixture<ParteBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteBajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
