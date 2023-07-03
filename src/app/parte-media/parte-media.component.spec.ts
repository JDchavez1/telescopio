import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteMediaComponent } from './parte-media.component';

describe('ParteMediaComponent', () => {
  let component: ParteMediaComponent;
  let fixture: ComponentFixture<ParteMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
