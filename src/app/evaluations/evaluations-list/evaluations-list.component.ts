import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from '../evaluations.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Evaluation } from '../evaluation';

@Component({
  selector: 'app-evaluations-list',
  templateUrl: './evaluations-list.component.html',
  styleUrls: ['./evaluations-list.component.css']
})
export class EvaluationsListComponent implements OnInit {

  evaluations: Evaluation[];

  constructor(private route: ActivatedRoute,
    private evaluationsService: EvaluationsService,
    private router: Router) { }

  ngOnInit() {
    this.evaluationsService.getEvaluations().then(evaluations => this.evaluations = evaluations);
  }

gotoDetail(evaluation: Evaluation): void {
    this.router.navigate(['evaluations', evaluation.id]);
  }

}
