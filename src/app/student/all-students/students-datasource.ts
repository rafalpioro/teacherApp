import {CollectionViewer, DataSource} from "@angular/cdk/collections";

import {Student} from "../../model/student";

import {ApiStudentService} from "../../shared/api-student.service";
import {catchError, finalize} from "rxjs/operators";

import {BehaviorSubject, Observable, of} from "rxjs";

export class StudentsDatasource implements DataSource<Student>{
  private studentSubject = new BehaviorSubject<Student[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private studentService: ApiStudentService) {}

  connect(collectionViewer: CollectionViewer): Observable<Student[]> {
    return this.studentSubject.asObservable();
    console.log(this.studentSubject);
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.studentSubject.complete();
    this.loadingSubject.complete();
  }

  loadStudent(page = 1, size = 5) {

    this.loadingSubject.next(true);

    this.studentService.findStudents(
      page, size).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(student => {this.studentSubject.next(student["content"])});
  }
}
