import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {StudentsDatasource} from "./students-datasource";
import {ApiStudentService} from "../../shared/api-student.service";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {tap} from "rxjs/operators";
import {MatPaginator} from "@angular/material";

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements AfterViewInit, OnInit {


  dataSource: StudentsDatasource;
  displayedColumns = ["id", "name", "surname","age"];
  public total_count: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentsService: ApiStudentService) { }

  ngOnInit() {
    this.dataSource = new StudentsDatasource(this.studentsService)
    this.dataSource.loadStudent(0,5);
    this.studentsService.allStudents().subscribe(res=>{this.total_count = res.length});
    console.log(this.total_count);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadStudent(
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }

}

export class StudentData extends DataSource<any> {
  constructor(private studentService: ApiStudentService) {
    super();
  }
  connect(): Observable<Student[]> {
    return this.studentService.allStudents();
  }
  disconnect() {}
}