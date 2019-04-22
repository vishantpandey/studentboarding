import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsInfoComponent } from './list-students-info.component';

describe('ListStudentsInfoComponent', () => {
  let component: ListStudentsInfoComponent;
  let fixture: ComponentFixture<ListStudentsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
