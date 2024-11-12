import {
  provideHttpClient,
  withInterceptors,
  withRequestsMadeViaParent,
} from '@angular/common/http';
import { Routes } from '@angular/router';
import { LoggingInterceptor } from './loggng.interceptor';

export const routes: Routes = [
  {
    path: 'users',
    providers: [
      provideHttpClient(
        withInterceptors([LoggingInterceptor]),
        withRequestsMadeViaParent()
      ),
    ],
    loadComponent: () =>
      import('./Users/users/users.component').then(
        (users) => users.UsersComponent
      ),
  },
];
