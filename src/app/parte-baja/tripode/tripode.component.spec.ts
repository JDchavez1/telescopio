import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripodeComponent } from './tripode.component';

describe('TripodeComponent', () => {
  let component: TripodeComponent;
  let fixture: ComponentFixture<TripodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
