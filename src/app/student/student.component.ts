import { Component, OnInit } from '@angular/core';
import {ApiStudentService} from "../shared/api-student.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  allStudents: Student[];

  constructor(private studentService: ApiStudentService) { }

  ngOnInit() {
  }

  getAllStudents(){
    this.studentService.allStudents().subscribe(res =>{this.allStudents = res}, err =>{alert("Error has occurred while getting data")})
  }

}
