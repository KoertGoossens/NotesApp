import { TestBed } from '@angular/core/testing';

import { ErrormessageService } from './errormessage.service';

describe('ErrormessageService', () => {
  let service: ErrormessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrormessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
