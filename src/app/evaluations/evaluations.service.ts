import { Injectable } from '@angular/core';
import { Evaluation } from './evaluation';
import { EVALUATIONS } from './mock-evaluations';

@Injectable()
export class EvaluationsService {

  constructor() { }

  getEvaluations(): Promise<Evaluation[]> {
    return Promise.resolve(EVALUATIONS);
  }

  getEvaluation(id: number): Promise<Evaluation> {
    return this.getEvaluations()
      .then(evaluations => evaluations.find(evaluation => evaluation.id === id));
  }
}
