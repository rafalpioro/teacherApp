import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {Section} from "../../model/section";

@Component({
  selector: 'app-add-new-section',
  templateUrl: './add-new-section.component.html',
  styleUrls: ['./add-new-section.component.css']
})
export class AddNewSectionComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddNewSectionComponent>, @Inject(MAT_DIALOG_DATA) public section: Section) {

    this.form = fb.group({
      name: ['', Validators.required]
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
