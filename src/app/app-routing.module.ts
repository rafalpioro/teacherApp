import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllStudentsComponent} from "./student/all-students/all-students.component";

const routes: Routes = [ {
  path: 'students',
  component: AllStudentsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
