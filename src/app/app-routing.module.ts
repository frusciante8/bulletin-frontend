import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulletinsComponent } from './bulletins/bulletins.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'students',
        loadChildren: 'app/students/students.module#StudentsModule'
    },
    {
        path: 'bulletins',
        component: BulletinsComponent
    },
    {
        path: 'evaluations',
        loadChildren: 'app/evaluations/evaluations.module#EvaluationsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
