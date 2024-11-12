import { HttpInterceptorFn } from '@angular/common/http';

export const LoggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('logging Interceptor for users path');
  return next(req);
};
