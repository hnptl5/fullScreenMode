import { TestBed } from '@angular/core/testing';

import { FullwindowService } from './fullwindow.service';

describe('FullwindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullwindowService = TestBed.get(FullwindowService);
    expect(service).toBeTruthy();
  });
});
