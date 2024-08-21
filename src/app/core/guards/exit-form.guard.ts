import { CanDeactivateFn } from '@angular/router';
import { CourseDetailComponent } from '../../pages/course-detail/course-detail.component';

export const exitFormGuard: CanDeactivateFn<CourseDetailComponent> = (component) => {
  if(!component.enrolementForm?.dirty){
    return true
  }
  return window.confirm('You have not fnisth the enrollment yet, Are you sure you want to exit?')
};
