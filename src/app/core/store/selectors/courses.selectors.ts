import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Course } from "../../services/courses.models"

export const selectCourses = createFeatureSelector<Course[]>('courses');

export const selectTopCourses = createSelector(  
    selectCourses,  
    (courses) => courses.slice(0, 4) 
);

export const selectCourseById = (id:string)=>createSelector(
    selectCourses,
    (courses)=>courses.find(course=>course.id===id)
)