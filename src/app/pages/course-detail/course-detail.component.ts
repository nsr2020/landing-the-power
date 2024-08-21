import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../core/services/courses.models';
import { ActivatedRoute } from '@angular/router';
import { validateNumberInAddress } from './validators';
import { Store } from '@ngrx/store';
import { selectCourseById } from '../../core/store/selectors/courses.selectors';
import { enroleStudent } from '../../core/store/actions/courses.actions';


@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
public course?: Course 
public enrolementForm?: FormGroup;

constructor(
  private store:Store, 
  private activatedRoute: ActivatedRoute,
  
){}

public ngOnInit() {
  this.listenRouteParamsChanges(); 
}

public listenRouteParamsChanges(){
  this.activatedRoute.params.subscribe((params)=>{
    const courseId = params['id'];
    if(!courseId) {return}
    this.store.select(selectCourseById(courseId)).subscribe((course)=>{
      this.course = course;
      this.initializeEnrolementForm()
    })
  })
}
public initializeEnrolementForm(): void {
  this.enrolementForm = new FormGroup({
   course: new FormControl(this.course?.title || "", Validators.required),
   name: new FormControl("", Validators.required),
   surName: new FormControl("", Validators.required),
   email: new FormControl("", [Validators.required, Validators.email]),
   phone: new FormControl("",[Validators.pattern('[0-9]{9}')]),
   address: new FormControl("", [Validators.required, validateNumberInAddress()]),
   terms: new FormControl(false, Validators.requiredTrue)
  });
}
public enroleStudent():void{
  if(!this.enrolementForm || !this.enrolementForm.valid || !this.course){return}
  this.enrolementForm.reset() 
  this.store.dispatch(enroleStudent({
    courseId: this.course.id ,
    newNumVacancies: this.course.numVacancies - 1
  }))
}
}
