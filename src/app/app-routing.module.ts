import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllStudentsComponent} from "./student/all-students/all-students.component";
import {AddNewStudentComponent} from "./student/add-new-student/add-new-student.component";
import {SectionComponent} from "./section/section.component";
import {LessonComponent} from "./lesson/lesson.component";
import {AddNewLessonComponent} from "./lesson/add-new-lesson/add-new-lesson.component";
import {SliderComponent} from "./shared/slider/slider.component";


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
    component: LessonComponent
  },
  {
    path: 'lessons/add-lesson',
    component: AddNewLessonComponent
  },
  {
    path: '',
    component: SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
