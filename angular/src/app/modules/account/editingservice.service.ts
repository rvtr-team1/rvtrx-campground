import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditingService {
  private readonly beacon = new Subject<any>();
  private isAssembling = false;

  public Assemble() {
    this.beacon.next('assemble');
  }

  update(e: any) {
    this.beacon.next(e);
    if (this.isAssembling === false) {
      this.isAssembling = true;
      this.beacon.next('assemble');
    }
  }

  subject(): Observable<any> {
    return this.beacon.asObservable();
  }

  successfullAssembly(): void {
    this.isAssembling = false;
  }
  constructor() {}
}
