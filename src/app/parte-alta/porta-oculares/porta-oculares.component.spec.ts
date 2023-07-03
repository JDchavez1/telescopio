import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaOcularesComponent } from './porta-oculares.component';

describe('PortaOcularesComponent', () => {
  let component: PortaOcularesComponent;
  let fixture: ComponentFixture<PortaOcularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaOcularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortaOcularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
