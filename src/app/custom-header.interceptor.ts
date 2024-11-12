// import { HttpInterceptorFn } from '@angular/common/http';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const customHeaderInterceptor: HttpInterceptorFn = (request, next) => {
//   const modifiedRequest = request.clone({
//     setHeaders: {
//       'custom-header': 'leelawebdev',
//     },
//   });
//   return next(modifiedRequest);
// };

@Injectable()
export class customHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      setHeaders: {
        'custom-header': 'leelawebdevdsds',
      },
    });
    return next.handle(modifiedRequest);
  }
}
