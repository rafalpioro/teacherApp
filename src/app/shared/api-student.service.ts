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
    page = 1, size = 3):  Observable<Student[]> {

    return this.http.get<Student[]>(this.URL, {
      params: new HttpParams()

        .append('page', page.toString())
        .append('size', size.toString())
    })
  }

  allStudents(): Observable<Student[]>{
    return this.http.get<[]>(this.URL);
  }
}
