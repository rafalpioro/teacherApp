import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Student} from "../../model/student";
import {Section} from "../../model/section";
import {Subject} from "../../model/subject";
import {Lesson} from "../../model/lesson";
import {ApiLessonService} from "../../shared/api-lesson.service";
import {ApiSectionService} from "../../shared/api-section.service";
import {ApiSubjectService} from "../../shared/api-subject.service";
import {ApiStudentService} from "../../shared/api-student.service";

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  students: Student[];
  sections: Section[];
  subjects: Subject[];
  section: Section;
  subject: Subject;

  form: FormGroup;



  constructor( private fb: FormBuilder,
               private dialogRef: MatDialogRef<EditLessonComponent>,
               @Inject(MAT_DIALOG_DATA) public lesson: Lesson,
               private lessonService: ApiLessonService,
               private sectionService: ApiSectionService,
               private subjectService: ApiSubjectService,
               private studentService: ApiStudentService,) {

    sectionService.findAllSections().subscribe(value => this.sections = value);
    studentService.allStudents().subscribe(value => this.students = value);

    this.createForm();

  }

  createForm(){
    this.form = this.fb.group({
      date: [this.lesson.date, Validators.required],
      dayOfWeek: [{value:this.lesson.dayOfWeek, disabled: true}, Validators.required],
      section: this.lesson.section,
      subject: [this.lesson.subject],
      content: [this.lesson.content],
      assignment: [this.lesson.assignment],
      materials: [this.lesson.materials],
      student: [this.lesson.student],
      nextLesson: [this.lesson.nextLesson]
    });


    this.form.get('section').valueChanges.subscribe(value => {
      this.section = value;
      this.subjects = this.section.subjects;
    });

  }

  ngOnInit() {

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

  onDateChange(date: number): void{
    let dt = new Date(date);
   // console.log(dt);
    this.lesson.dayOfWeek = dt.toLocaleString('pl',{weekday:'long'});
  }

  onSectionChange(section: Section) : void{
    console.log(section.name);
    this.lesson.section = section;
  }

  onSelect(section: Section) : void {
    this.subjects = section.subjects;
    this.lesson.section = section;

    console.log(section.name);
  }

  onSubjectChange(subject: Subject): void {
    this.lesson.subject = subject;
  }

  onStudentChange(student: Student): void {
    this.lesson.student = student;
  }

}
