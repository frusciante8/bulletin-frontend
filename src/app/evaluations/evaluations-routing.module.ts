import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationsComponent } from './evaluations.component';
import { EvaluationsListComponent } from './evaluations-list/evaluations-list.component';
import { EvaluationDetailsComponent } from './evaluation-details/evaluation-details.component';

const evalRoutes: Routes = [
  {
    path: '',
    component: EvaluationsComponent,
    children: [
      {
        path: '',
        component: EvaluationsListComponent
      },
      {
        path: ':id',
        component: EvaluationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(evalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EvaluationsRoutingModule { }
