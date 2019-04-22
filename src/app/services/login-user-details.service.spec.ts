import { TestBed } from '@angular/core/testing';

import { LoginUserDetailsService } from './login-user-details.service';

describe('LoginUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUserDetailsService = TestBed.get(LoginUserDetailsService);
    expect(service).toBeTruthy();
  });
});
