import { TestBed } from '@angular/core/testing';
import { UserApiService } from './user-api.service';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiService);
  });
});
