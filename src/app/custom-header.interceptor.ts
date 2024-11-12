import { HttpInterceptorFn } from '@angular/common/http';

export const customHeaderInterceptor: HttpInterceptorFn = (request, next) => {
  console.log('custom Header interceptor');
  const modifiedRequest = request.clone({
    setHeaders: {
      'custom-header': 'leelawebdev',
    },
  });
  return next(modifiedRequest);
};
