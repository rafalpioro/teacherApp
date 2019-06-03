import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiLessonService} from "../api-lesson.service";
import {Lesson} from "../../model/lesson";
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor(private lessonService: ApiLessonService, private router: Router) { }

  lessons: Lesson[];
  check: boolean = false;


  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit() {
    this.loadLessons();
  }

  goToStudent(lesson){
    this.router.navigate(['students']);
  }

  ngAfterViewInit(): void {
    this.loadLessons();
  }

  loadLessons():void{
    this.lessonService.findTodayLesson().subscribe(value => {
      if(value.length>0){
        this.lessons = value;
        this.check = true;
      }
    })
  }

}
