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

  getSubjectById(id: number): Observable<Subject>{
    return this.http.get<Subject>(this.URL +"/"+id);
  }

  deleteSubject(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  updateSubject(subject: Subject): Observable<any>{
    return this.http.put(this.URL +"/"+subject.id, subject);
  }


}
