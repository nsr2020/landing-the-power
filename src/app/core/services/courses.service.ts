import { Injectable } from '@angular/core';
import { Course } from './courses.models';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  /* private courses: Course[] = COURSES */

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiUrl}courses`);
  }
  /* public getTopCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiUrl}courses`).pipe(
      map((courses) => courses.slice(0,4))
    );
  } */
 /*  public getCourseById(id: string):Observable<Course> {
    return this.http.get<Course>(`${environment.apiUrl}courses/${id}`);
  } */
  public enroleStudent(courseId:string, newNumVacancies:number): Observable<Course>{
    
    return this.http.put<Course>(
      
      `${environment.apiUrl}courses/${courseId}`,
      
      {numVacancies:newNumVacancies}
    )
   /*  if(course){
      if(course.numVacancies === 0){
        return
      }
      course.numVacancies--
    } */
  }
}
