import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllStudentsComponent} from "./student/all-students/all-students.component";
import {AddNewStudentComponent} from "./student/add-new-student/add-new-student.component";
import {SectionComponent} from "./section/section.component";
import {AllLessonsComponent} from "./lesson/all-lessons/all-lessons.component";

const routes: Routes = [ {
  path: 'students',
  component: AllStudentsComponent
},
  {
    path: 'students/add-student',
    component: AddNewStudentComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  {
    path: 'lessons',
    component: AllLessonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
