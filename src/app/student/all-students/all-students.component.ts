import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {StudentsDatasource} from "./students-datasource";
import {ApiStudentService} from "../../shared/api-student.service";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {tap} from "rxjs/operators";
import {MatDialog, MatDialogConfig, MatFormField, MatPaginator} from "@angular/material";
import {Router} from "@angular/router";
import {EditStudentComponent} from "../edit-student/edit-student.component";

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements AfterViewInit, OnInit {


  dataSource: StudentsDatasource;
  displayedColumns = ["id", "name", "surname","age", "clas", "timesWeekly", "dayOfWeek", "time", "edit"];
  search: string;

  public total_count: number;
  data:Student;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private studentsService: ApiStudentService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new StudentsDatasource(this.studentsService);
    this.dataSource.loadStudent(0,5, '');
    this.studentsService.allStudents().subscribe(res=>{this.total_count = res.length});

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
      this.paginator.pageSize,
      this.search);
  }

  addStudent(){
    this.router.navigate(['students/add-student']);
  }

  deleteStudent(student: Student){
    if(confirm("Na pewno chcesz usunąć studenta?")){
      this.studentsService.deleteStudent(student.id).subscribe(
        res =>{
          this.studentsService.allStudents().subscribe(res=>{this.total_count = res.length});
          this.loadLessonsPage();
        },
        err=>{alert("Could not delete client")}
      );
    }
  }


  openDialog(student: Student): void {

    const dialogConfig = new MatDialogConfig();

      this.studentsService.getStudentById(student.id).subscribe(res => {
        this.data = student;



        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.data;
        console.log(dialogConfig.data);
        this.dialog.open(EditStudentComponent, dialogConfig);
        //
        const dialogRef = this.dialog.open(EditStudentComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => this.studentsService.updateStudent(student).subscribe(res=>{
          this.loadLessonsPage();
        }));
      }, error1 => {
        alert("Alert form openDialog")
      });
      console.log(this.data);

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
