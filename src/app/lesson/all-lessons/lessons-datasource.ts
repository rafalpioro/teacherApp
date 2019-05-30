import {DataSource} from "@angular/cdk/table";
import {Lesson} from "../../model/lesson";
import {CollectionViewer} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {ApiLessonService} from "../../shared/api-lesson.service";
import {catchError, finalize} from "rxjs/operators";

export class LessonsDatasource implements DataSource<Lesson>{

  private lessonSubject = new BehaviorSubject<Lesson[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(public lessonService: ApiLessonService){}

  connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
    return this.lessonSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonSubject.complete();
    this.loadingSubject.complete();
  }

  loadLesson() {

    this.loadingSubject.next(true);

    this.lessonService.allLessons().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(lesson => {this.lessonSubject.next(lesson)});
  }
}
