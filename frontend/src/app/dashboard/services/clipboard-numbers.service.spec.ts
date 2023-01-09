import { TestBed } from '@angular/core/testing';

import { ClipboardNumbersService } from './clipboard-numbers.service';

describe('ClipboardNumbersService', () => {
  let service: ClipboardNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipboardNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
