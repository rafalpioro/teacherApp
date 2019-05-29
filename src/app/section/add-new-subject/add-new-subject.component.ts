import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Section} from "../../model/section";



@Component({
  selector: 'app-add-new-subject',
  templateUrl: './add-new-subject.component.html',
  styleUrls: ['./add-new-subject.component.css']
})
export class AddNewSubjectComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddNewSubjectComponent>, @Inject(MAT_DIALOG_DATA) public section: Section) {

      this.form = fb.group({
        title: ['', Validators.required]
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
