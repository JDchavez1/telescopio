import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPesoComponent } from './conta-peso.component';

describe('ContaPesoComponent', () => {
  let component: ContaPesoComponent;
  let fixture: ComponentFixture<ContaPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
