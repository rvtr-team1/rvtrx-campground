import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalerrorhandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any) {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);

    if (error instanceof HttpErrorResponse) {
      //Backend Errors
      console.error('Backend returned status code: ', error.status);
      console.error('Response body: ', error.message);
    } else {
      //Client-side or network error
      console.error('An error occurred: ', error.message);
    }
    router.navigate(['/error']);
  }
}
