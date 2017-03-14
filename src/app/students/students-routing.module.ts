import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsListComponent } from './students-list/students-list.component';

const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
     children: [
      {
        path: '',
        component: StudentsListComponent
      }, 
      {
        path: ':id',
        component: StudentDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }
