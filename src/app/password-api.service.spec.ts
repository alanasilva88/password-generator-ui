import { PasswordApiService } from './password-api.service';
import { TestBed } from '@angular/core/testing';


describe('PasswordApi', () => {
  let service: PasswordApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
