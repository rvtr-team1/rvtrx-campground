import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Lodging } from '../../data/lodging.model';

@Injectable({
  providedIn: 'root',
})
export class LodgingService {
  private readonly lodgingsUrl$: Observable<string>;
  private readonly rentalsUrl$: Observable<string>;
  private readonly reviewsUrl$: Observable<string>;

  /**
   * Represents the _Lodging Service_ `constructor` method
   *
   * @param config ConfigService
   * @param http HttpClient
   */
  constructor(config: ConfigService, private readonly http: HttpClient) {
    const config$ = config.get();
    this.lodgingsUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.lodging.base}${cfg.api.lodging.uri.lodging}`)
    );
    this.rentalsUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.lodging.base}${cfg.api.lodging.uri.rental}`)
    );
    this.reviewsUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.lodging.base}${cfg.api.lodging.uri.review}`)
    );
  }

  /**
   * Represents the _Lodging Service_ `delete` method
   *
   * @param id string
   */
  delete(id: string): Observable<boolean> {
    return this.lodgingsUrl$.pipe(
      concatMap((url) => this.http.delete<boolean>(url, { params: { id } }))
    );
  }

  /**
   * Represents the _Lodging Service_ `get` method
   *
   * @param id string
   */
  get(id?: string): Observable<Lodging[]> {
    const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.lodgingsUrl$.pipe(concatMap((url) => this.http.get<Lodging[]>(url, options)));
  }

  /**
   * Represents the _Lodging Service_ `post` method
   *
   * @param lodging Lodging
   */
  post(lodging: Lodging): Observable<boolean> {
    return this.lodgingsUrl$.pipe(concatMap((url) => this.http.post<boolean>(url, lodging)));
  }

  /**
   * Represents the _Lodging Service_ `put` method
   *
   * @param lodging Lodging
   */
  put(lodging: Lodging): Observable<Lodging> {
    return this.lodgingsUrl$.pipe(concatMap((url) => this.http.put<Lodging>(url, lodging)));
  }
}
