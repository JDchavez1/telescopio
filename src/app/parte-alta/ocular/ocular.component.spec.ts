import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcularComponent } from './ocular.component';

describe('OcularComponent', () => {
  let component: OcularComponent;
  let fixture: ComponentFixture<OcularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
