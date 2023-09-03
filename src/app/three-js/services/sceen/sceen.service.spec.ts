/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SceenService } from './sceen.service';

describe('Service: Sceen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceenService]
    });
  });

  it('should ...', inject([SceenService], (service: SceenService) => {
    expect(service).toBeTruthy();
  }));
});
