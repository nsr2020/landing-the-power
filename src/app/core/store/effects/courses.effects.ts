import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { CoursesService } from "../../services/courses.service";
import { Router } from "@angular/router";
import { enroleStudent, retrieveCourses, setCourses } from "../actions/courses.actions";
import { map, switchMap, tap } from "rxjs";


@Injectable()
export class CoursesEffects{

    retrieveCourses$ = this.actions$.pipe(
        ofType(retrieveCourses),
        tap(() => console.log('retrieveCourses action triggered')),
        switchMap(() => this.coursesService.getCourses()),
        map(courses => setCourses({ courses })),
      );
      enroleStudent$ = this.actions$.pipe(
        ofType(enroleStudent),
        switchMap(({ courseId, newNumVacancies }) => this.coursesService.enroleStudent(
          courseId, newNumVacancies
        )),
        tap(()=> this.router.navigate(['courses'])),
        map(() => retrieveCourses()),
      );
      constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router
      ) {}
}