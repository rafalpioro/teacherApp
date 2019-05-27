import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Subject} from "../model/subject";

@Injectable({
  providedIn: 'root'
})
export class ApiSubjectService {

  private URL ="http://localhost:8080/subjects";

  constructor(private http:HttpClient) { }

  addNewSubject(subject : Subject): Observable<any> {
    return this.http.post<Subject>(this.URL, subject);
  }
}
