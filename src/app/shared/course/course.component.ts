import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../core/services/courses.models';
import { Router } from '@angular/router';

@Component({  selector: 'app-course', 
   standalone: true,  
   imports: [CommonModule,NgOptimizedImage  ],  
   templateUrl: './course.component.html',  
   styleUrl: './course.component.scss' }) 
   export class CourseComponent {  
    @Input() course?: Course;  
    constructor(private router: Router) {} 
     public onSeeMoreInfo(): void {    
      if (!this.course) { return; }    
      this.router.navigate(['/course', this.course.id])  
    } }
