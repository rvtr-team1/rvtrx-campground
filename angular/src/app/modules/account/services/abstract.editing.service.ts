import { Subject } from 'rxjs';
import { scan, filter, skip } from 'rxjs/operators';

export abstract class EditingService<T> {
  /**
   * Receiver and transmitter object
   */
  private readonly subject = new Subject<T>();

  /**
   * Pipe off of ^ subject, allows for accumulating pushes into a payload
   */
  public editUpdates = this.subject.pipe(
    scan((acc, curr) => (typeof curr === 'object' ? Object.assign({}, acc, curr) : null), {})
  );

  /**
   * Piped from above, If this.typeguard() of above object is true, release it, else null
   * skip first inorder to allow first update function to pass in correct model of type t
   */

  public PayloadEmitter = this.editUpdates
    .pipe(filter((el) => this.typeGuard(el || {})))
    .pipe(skip(1));

  /**
   * Called by anything which changes state and wants to reflect in payload
   * To expand messaging type, add to Type union passed in
   */
  public update(e: T) {
    this.subject.next(e);
  }
  /**
   * Getter for the subject
   */
  public get Subject(): Subject<T> {
    return this.subject;
  }

  constructor(private readonly typeGuard: (args: {}) => boolean) {}
}
