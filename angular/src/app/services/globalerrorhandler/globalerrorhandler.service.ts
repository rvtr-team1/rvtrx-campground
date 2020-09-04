import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalerrorhandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: HttpErrorResponse): void {
    const router = this.injector.get(Router);
    console.log('URL: ' + router.url);

    // Backend Errors
    console.error('Backend returned status code: ', error.status);
    console.error('Response body: ', error.message);

    router.navigate(['/error']);
  }
}
