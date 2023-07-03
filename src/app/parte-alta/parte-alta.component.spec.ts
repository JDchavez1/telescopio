import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteAltaComponent } from './parte-alta.component';

describe('ParteAltaComponent', () => {
  let component: ParteAltaComponent;
  let fixture: ComponentFixture<ParteAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
