import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingAppScreenComponent } from './on-boarding-app-screen.component';

describe('OnBoardingAppScreenComponent', () => {
  let component: OnBoardingAppScreenComponent;
  let fixture: ComponentFixture<OnBoardingAppScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingAppScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingAppScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
