import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = authService.getToken();

  // Clone the request and add the authorization header
  const authReq = authToken ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  }): req;

  // Pass the cloned request with the updated header to the next handler
  return next(authReq);
};
