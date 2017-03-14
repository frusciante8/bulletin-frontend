import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationsListComponent } from './evaluations-list/evaluations-list.component';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsComponent } from './evaluations.component';
import { DataTableModule } from 'angular2-datatable';
import { EvaluationDetailsComponent } from './evaluation-details/evaluation-details.component';

@NgModule({
  imports: [
    CommonModule,
    EvaluationsRoutingModule,
    DataTableModule
  ],
  declarations: [
    EvaluationsComponent,
    EvaluationsListComponent,
    EvaluationDetailsComponent
    ],
  providers: [
    EvaluationsService
  ]
})
export class EvaluationsModule { }
