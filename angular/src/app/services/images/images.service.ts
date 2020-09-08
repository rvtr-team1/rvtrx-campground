import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private req: RequestService) {}

  getImageUrl(): Observable<any> {
    return this.req.getImageData();
  }
}