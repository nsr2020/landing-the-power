import { createReducer, on } from "@ngrx/store";
import { Course } from "../../services/courses.models";
import { setCourses } from "../actions/courses.actions";

export const coursesReducer = createReducer(
    [] as Course[],
    on(setCourses, (state,{courses})=> courses)
)