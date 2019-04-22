import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingFormStudentComponent } from './on-boarding-form-student.component';

describe('OnBoardingFormStudentComponent', () => {
  let component: OnBoardingFormStudentComponent;
  let fixture: ComponentFixture<OnBoardingFormStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingFormStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
