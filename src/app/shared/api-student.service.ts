import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  private URL ="http://localhost:8080/students";

  constructor(private http:HttpClient) {}

  findStudents(
    page = 1, size = 5, name = ''):  Observable<Student[]> {

    return this.http.get<Student[]>(this.URL, {
      params: new HttpParams()

        .append('page', page.toString())
        .append('size', size.toString())
        .append('name', name.toString())
    })
  }

  allStudents(): Observable<Student[]>{
    return this.http.get<[]>(this.URL);
  }

  addNewStudent(student: Student):Observable<any>{
    return this.http.post<Student[]>(this.URL, student);
  }

  deleteStudent(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(this.URL +"/"+id);
  }

  updateStudent(student: Student): Observable<any>{
    return this.http.put(this.URL +"/"+student.id,student);
  }
}
