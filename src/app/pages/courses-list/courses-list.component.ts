import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../../shared/course/course.component';
import { Course } from '../../core/services/courses.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCourses } from '../../core/store/selectors/courses.selectors';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, CourseComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  public courses$?: Observable<Course[]>;
  constructor(private store: Store) {}
  public ngOnInit() {
    this.courses$ = this.store.select(selectCourses);
  }
}

