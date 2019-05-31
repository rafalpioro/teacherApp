import { Component, OnInit } from '@angular/core';


import {Router} from "@angular/router";

import {Lesson} from "../../model/lesson";

import {ApiLessonService} from "../../shared/api-lesson.service";
import {ApiSectionService} from "../../shared/api-section.service";
import {ApiSubjectService} from "../../shared/api-subject.service";
import {Section} from "../../model/section";
import {ApiStudentService} from "../../shared/api-student.service";
import {Student} from "../../model/student";
import {Subject} from "../../model/subject";

@Component({
  selector: 'app-add-new-lesson',
  templateUrl: './add-new-lesson.component.html',
  styleUrls: ['./add-new-lesson.component.css']
})
export class AddNewLessonComponent implements OnInit {

  students: Student[];
  sections: Section[];
  subjects: Subject[];


  model: Lesson={
    id: null,
    date: null,
    dayOfWeek: '',
    section: null,
    subject: null,
    content: '',
    assignment: '',
    materials: '',
    student: null,
    nextLesson: '',
  };

  constructor(private lessonService: ApiLessonService,
              private sectionService: ApiSectionService,
              private subjectService: ApiSubjectService,
              private studentService: ApiStudentService,
              private router: Router) {
    sectionService.findAllSections().subscribe(value => this.sections = value);
    studentService.allStudents().subscribe(value => this.students = value);

  }

  ngOnInit() {
  }

  onDateChange(date: number): void{
    let dt = new Date(date);
    console.log(dt);
    this.model.dayOfWeek = dt.toLocaleString('pl',{weekday:'long'});
    console.log(this.model.dayOfWeek);
  }

  onSectionChange(section: Section) : void{
    this.model.section = section;
    this.subjects = section.subjects;
  }

  onSubjectChange(subject: Subject): void {
    this.model.subject = subject;
  }

  onStudentChange(student: Student): void {
    this.model.student = student;
  }

  sendFeedback(): void{

    this.lessonService.addNewLesson(this.model).subscribe(res => {this.router.navigate(['lessons'])},err => {alert("Error has occurred while sending data")});
  }
}
