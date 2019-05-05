import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,MatSortModule, MatTableModule } from "@angular/material";
import { LessonComponent } from './lesson/lesson.component';
import { SectionComponent } from './section/section.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { AllStudentsComponent } from './student/all-students/all-students.component';
import { AllStudentTableComponent } from './student/all-student-table/all-student-table.component';





@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    SectionComponent,
    StudentComponent,
    SubjectComponent,
    AllStudentsComponent,
    AllStudentTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
