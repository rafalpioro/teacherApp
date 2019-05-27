import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {ApiStudentService} from "../../shared/api-student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  model: Student={
    id: null,
  name: '',
  surname: '',
  clas: '',
  age: null,
  knowledgeLevel: '',
  aim: '',
  timesWeekly: null,
  dayOfWeek: '',
  time: '',
  };

  constructor(private studentsService: ApiStudentService, private router: Router) {
  }

  ngOnInit() {
  }

  sendFeedback(): void{

    this.studentsService.addNewStudent(this.model).subscribe(res => {this.router.navigate(['students'])},err => {alert("Error has occurred while sending data")});
  }
}
