import { Component, OnInit } from '@angular/core';
import {ApiStudentService} from "../../shared/api-student.service";

@Component({
  selector: 'app-all-student-table',
  templateUrl: './all-student-table.component.html',
  styleUrls: ['./all-student-table.component.css']
})
export class AllStudentTableComponent implements OnInit {

  constructor(studentService: ApiStudentService) { }

  ngOnInit() {
  }

}
