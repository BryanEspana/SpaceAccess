/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModelLoaderService } from './ModelLoader.service';

describe('Service: ModelLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelLoaderService]
    });
  });

  it('should ...', inject([ModelLoaderService], (service: ModelLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
