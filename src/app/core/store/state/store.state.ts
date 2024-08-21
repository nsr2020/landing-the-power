import { Course } from "../../services/courses.models";

export interface AppState{
    courses:Course[]
}

export const initialState: AppState = {
    courses: []
}