import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Lodging } from '../../data/lodging.model';
import { Filter } from '../../data/filter.model';
import { MonitoringService } from '../monitoring/monitoring.service';

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
  constructor(
    config: ConfigService,
    private readonly http: HttpClient,
    private readonly monitoring: MonitoringService
  ) {
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
  delete(id: string): Observable<void> {
    return this.lodgingsUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) =>
        this.http.delete<void>(url).pipe(
          catchError((err) => {
            this.monitoring.handleError(err);
            return throwError('Lodging Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Lodging Service_ `get` method
   *
   * @param filter Filter
   */
  get(filter?: Filter): Observable<Lodging[]> {
    if (!filter) {
      return this.lodgingsUrl$.pipe(
        concatMap((url) =>
          this.http.get<Lodging[]>(url).pipe(
            catchError((err) => {
              this.monitoring.handleError(err);
              return throwError('Lodging Service Error');
            })
          )
        )
      );
    } else {
      const params = new HttpParams().set('city', filter.city).set('occupancy', filter.occupancy);
      return this.lodgingsUrl$.pipe(
        concatMap((url) =>
          this.http
            .get<Lodging[]>(`${url}/available`, { params })
            .pipe(
              catchError((err) => {
                this.monitoring.handleError(err);
                return throwError('Lodging Service Error');
              })
            )
        )
      );
    }
  }

  /**
   * Represents the _Lodging Service_ `getById` method
   *
   * @param id string
   */
  getById(id: string): Observable<Lodging> {
    return this.lodgingsUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) =>
        this.http.get<Lodging>(url).pipe(
          catchError((err) => {
            this.monitoring.handleError(err);
            return throwError('Lodging Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Lodging Service_ `post` method
   *
   * @param lodging Lodging
   */
  post(lodging: Lodging): Observable<Lodging> {
    return this.lodgingsUrl$.pipe(
      concatMap((url) =>
        this.http.post<Lodging>(url, lodging).pipe(
          catchError((err) => {
            this.monitoring.handleError(err);
            return throwError('Lodging Service Error');
          })
        )
      )
    );
  }

  /**
   * Represents the _Lodging Service_ `put` method
   *
   * @param lodging Lodging
   */
  put(lodging: Lodging): Observable<Lodging> {
    return this.lodgingsUrl$.pipe(
      concatMap((url) =>
        this.http.put<Lodging>(url, lodging).pipe(
          catchError((err) => {
            this.monitoring.handleError(err);
            return throwError('Lodging Service Error');
          })
        )
      )
    );
  }
}
