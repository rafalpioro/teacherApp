import { Component, OnInit, ViewChild} from '@angular/core';

import {ApiLessonService} from "../../shared/api-lesson.service";

import {MatSort, MatTableDataSource} from "@angular/material";
import {Lesson} from "../../model/lesson";


@Component({
  selector: 'app-all-lessons',
  templateUrl: './all-lessons.component.html',
  styleUrls: ['./all-lessons.component.css']
})
export class AllLessonsComponent implements OnInit {

  displayedColumns = ['date', 'dayOfWeek', 'student', 'section', 'subject', 'content', 'assignment', 'materials', 'nextLesson'];
  dataSource :  MatTableDataSource<Lesson>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private lessonService: ApiLessonService) {}

  ngOnInit() {
    this.lessonService.allLessons().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.sort = this.sort;

      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'section':
            return item.section.name;
          case 'subject':
            return item.subject.title;
          case 'student':
            return item.student.name;
          default:
            return item[property];
        }
      }

      this.dataSource.filterPredicate = (data, filter: string)  => {
        const accumulator = (currentTerm, key) => {
          switch(key){
            case 'student':
              return  currentTerm + data.student.name;
            case 'subject':
              return  currentTerm + data.subject.title;
            case 'section':
              return  currentTerm + data.section.name;
            default:
              return currentTerm + data[key];
          }
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };
    })
  }

  doFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
