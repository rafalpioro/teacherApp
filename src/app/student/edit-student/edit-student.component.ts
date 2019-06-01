import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {Student} from "../../model/student";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  form: FormGroup;


  constructor( private fb: FormBuilder, private dialogRef: MatDialogRef<EditStudentComponent>, @Inject(MAT_DIALOG_DATA) public student: Student) {

    this.form = fb.group({
      name: [student.name, Validators.required],
      surname: [student.surname, Validators.required],
      age: [student.age],
      clas: [student.clas],
      knowledgeLevel: [student.knowledgeLevel],
      aim: [student.aim],
      timesWeekly: [student.timesWeekly],
      dayOfWeek: [student.dayOfWeek],
      time: [student.time]
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
}


