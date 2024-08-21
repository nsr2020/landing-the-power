import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../../shared/course/course.component';
import { Course } from '../../core/services/courses.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTopCourses } from '../../core/store/selectors/courses.selectors';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
public topCourses$?: Observable<Course[]>
constructor(private store: Store){}
ngOnInit(){
  this.topCourses$ =this.store.select(selectTopCourses)
}
}
