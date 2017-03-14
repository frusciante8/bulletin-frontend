/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EvaluationsService } from './evaluations.service';

describe('EvaluationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluationsService]
    });
  });

  it('should ...', inject([EvaluationsService], (service: EvaluationsService) => {
    expect(service).toBeTruthy();
  }));
});
