import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "../model/lesson";

@Injectable({
  providedIn: 'root'
})
export class ApiLessonService {

  private URL ="http://localhost:8080/lessons";

  constructor(private http:HttpClient) {}


  allLessons(): Observable<Lesson[]>{
    return this.http.get<[]>(this.URL);
  }

  addNewLesson(lesson: Lesson):Observable<any>{
    return this.http.post<Lesson[]>(this.URL, lesson);
  }

  deleteLesson(id: number):Observable<any>{
    return this.http.delete(this.URL+"/"+id);
  }

  getLessonById(id: number): Observable<Lesson>{
    return this.http.get<Lesson>(this.URL +"/"+id);
  }

  updateLesson(lesson: Lesson): Observable<any>{
    return this.http.put(this.URL +"/"+lesson.id,lesson);
  }
}
