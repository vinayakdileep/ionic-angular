import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.userAuthenticated;
  if (!isAuthenticated){
    router.navigateByUrl('/auth');
    return false;
  }
  return true;
};
