import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Section} from "../model/section";



@Injectable({
  providedIn: 'root'
})
export class ApiSectionService {

  private URL ="http://localhost:8080/sections";

  constructor(private http:HttpClient) { }

  findAllSections(): Observable<Section[]>{
    return this.http.get<Section[]>(this.URL);
  }

  addNewSection(section : Section): Observable<any> {
    return this.http.post<Section>(this.URL, section);
  }

  getSectionById(id: number): Observable<Section>{
    return this.http.get<Section>(this.URL +"/"+id);
  }

}
