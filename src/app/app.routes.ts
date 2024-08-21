import { Routes } from '@angular/router';
import { exitFormGuard } from './core/guards/exit-form.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses-list/courses-list.component').then(
        (c) => c.CoursesListComponent
      ),
  },
  {
    path: 'course/:id',
    loadComponent: () =>
      import('./pages/course-detail/course-detail.component').then(
        (c) => c.CourseDetailComponent
      ),
    canDeactivate: [exitFormGuard],
  },
  { path: '**', redirectTo: 'home' },
];
