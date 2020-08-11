import { Subject } from 'rxjs';
import { scan, filter, skip } from 'rxjs/operators';

export abstract class EditingService<T> {
  private readonly subject = new Subject<T>();

  public editUpdates = this.subject.pipe(
    scan((acc, curr) => (typeof curr === 'object' ? Object.assign({}, acc, curr) : null), {})
  );

  public PayloadEmitter = this.editUpdates
    .pipe(filter((el) => this.typeGuard(el || {})))
    .pipe(skip(1));

  public update(e: any) {
    this.subject.next(e);
  }

  public register(e: any) {
    this.subject.next(e);
  }

  public get Subject(): Subject<any> {
    return this.subject;
  }

  constructor(private readonly typeGuard: (args: {}) => boolean) {}
}
