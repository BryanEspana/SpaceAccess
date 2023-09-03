/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoopMachineService } from './loopMachine.service';

describe('Service: LoopMachine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoopMachineService]
    });
  });

  it('should ...', inject([LoopMachineService], (service: LoopMachineService) => {
    expect(service).toBeTruthy();
  }));
});
