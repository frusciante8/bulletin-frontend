import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulletinsComponent } from './bulletins.component';

const bulletinsRoutes: Routes = [
  {
    path: '',
    component: BulletinsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bulletinsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BulletinsRoutingModule { }
