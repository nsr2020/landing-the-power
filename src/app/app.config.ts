import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { coursesReducer } from './core/store/reducers/courses.reducers';
import { CoursesEffects } from './core/store/effects/courses.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideHttpClient(), 
    provideStore({
      courses:coursesReducer
    }), 
    provideEffects(
      [CoursesEffects]
    ), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
