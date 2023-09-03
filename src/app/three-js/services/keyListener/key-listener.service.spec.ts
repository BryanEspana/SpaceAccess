/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KeyListenerService } from './key-listener.service';

describe('Service: KeyListener', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyListenerService]
    });
  });

  it('should ...', inject([KeyListenerService], (service: KeyListenerService) => {
    expect(service).toBeTruthy();
  }));
});
