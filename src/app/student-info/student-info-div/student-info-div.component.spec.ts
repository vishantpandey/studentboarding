import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoDivComponent } from './student-info-div.component';

describe('StudentInfoDivComponent', () => {
  let component: StudentInfoDivComponent;
  let fixture: ComponentFixture<StudentInfoDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInfoDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInfoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
