import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule, MatSelectModule, MatOptionModule
} from "@angular/material";
import { LessonComponent } from './lesson/lesson.component';
import { SectionComponent } from './section/section.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { AllStudentsComponent } from './student/all-students/all-students.component';
import { AddNewStudentComponent } from './student/add-new-student/add-new-student.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MenuComponent} from "./shared/menu/menu.component";
import { FooterComponent} from "./shared/footer/footer.component";
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { AddNewSectionComponent } from './section/add-new-section/add-new-section.component';
import { AddNewSubjectComponent } from './section/add-new-subject/add-new-subject.component';
import { EditSubjectComponent } from './section/edit-subject/edit-subject.component';
import { AllLessonsComponent } from './lesson/all-lessons/all-lessons.component';
import { AddNewLessonComponent } from './lesson/add-new-lesson/add-new-lesson.component';
import {ApiStudentService} from "./shared/api-student.service";
import {ApiLessonService} from "./shared/api-lesson.service";
import {ApiSectionService} from "./shared/api-section.service";
import {ApiSubjectService} from "./shared/api-subject.service";
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { EditLessonComponent } from './lesson/edit-lesson/edit-lesson.component';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    SectionComponent,
    StudentComponent,
    SubjectComponent,
    AllStudentsComponent,
    AddNewStudentComponent,
    MenuComponent,
    FooterComponent,
    EditStudentComponent,
    AddNewSectionComponent,
    AddNewSubjectComponent,
    EditSubjectComponent,
    AllLessonsComponent,
    AddNewLessonComponent,
    EditLessonComponent
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
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ApiStudentService, ApiLessonService, ApiSectionService, ApiSubjectService, {provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent],
  entryComponents: [EditStudentComponent, AddNewSectionComponent, AddNewSubjectComponent, EditSubjectComponent, EditLessonComponent]
})
export class AppModule {}
