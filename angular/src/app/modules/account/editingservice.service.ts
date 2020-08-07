import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditingService {
  private beacon = new Subject<any>();

  private Assemble() {
    this.beacon.next('assemble');
  }

  update(e: any) {
    this.beacon.next(e);
  }

  createChannel(): Observable<any> {
    return this.beacon.asObservable();
  }
  constructor() {}
}
