import { TestBed } from '@angular/core/testing';

import { PlaywrightService } from './playwright.service';

describe('PlaywrightService', () => {
  let service: PlaywrightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaywrightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
