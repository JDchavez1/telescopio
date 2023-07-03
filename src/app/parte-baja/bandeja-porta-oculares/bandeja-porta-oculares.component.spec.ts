import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaPortaOcularesComponent } from './bandeja-porta-oculares.component';

describe('BandejaPortaOcularesComponent', () => {
  let component: BandejaPortaOcularesComponent;
  let fixture: ComponentFixture<BandejaPortaOcularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaPortaOcularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaPortaOcularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
