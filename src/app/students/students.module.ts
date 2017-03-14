import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './students.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    DataTableModule
  ],
  declarations: [
    StudentsComponent,
    StudentDetailsComponent,
    StudentsListComponent
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
