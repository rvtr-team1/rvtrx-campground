import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { URLS } from 'src/app/data/url.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  url =
    'https://api.unsplash.com/photos/random/?query=camping&client_id=-VgEWdyeo0G12nlohsHfoYQ6-MUbsc7KHziyCbvEY2g';

  constructor(private http: HttpClient) {}

  getImageURL(): Observable<string> {
    return this.http.get<URLS>(this.url).pipe(
      map((res) => {
        return res.urls.regular;
      })
    );
  }
}
