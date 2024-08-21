import { createAction, props } from "@ngrx/store";
import { Course } from "../../services/courses.models";

export const retrieveCourses = createAction(
    '[Courses] Retrieve courses'
) 
export const setCourses = createAction(
    '[Courses] Set courses',
    props<{courses:Course[]}>()
)
export const enroleStudent = createAction(
    '[Courses] Enrole Student',
    props<{courseId:string, newNumVacancies: number}>()
)