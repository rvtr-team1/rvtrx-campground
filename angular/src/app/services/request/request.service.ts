import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = "https://api.unsplash.com/photos/?client_id=-VgEWdyeo0G12nlohsHfoYQ6-MUbsc7KHziyCbvEY2g";

  constructor(private http: HttpClient) { }

  getImageData(): Observable<any> {
    return this.http.get(this.url).pipe(map(function (res) { console.log(res) }));
  }
}
