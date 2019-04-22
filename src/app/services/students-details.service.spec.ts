import { TestBed } from '@angular/core/testing';

import { StudentsDetailsService } from './students-details.service';

describe('StudentsDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsDetailsService = TestBed.get(StudentsDetailsService);
    expect(service).toBeTruthy();
  });
});
