import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Booking } from '../../data/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly apiUrl$: Observable<string>;

  /**
   * Represents the _Booking Service_ `constructor` method
   *
   * @param config ConfigService
   * @param http HttpClient
   */
  constructor(private readonly config: ConfigService, private readonly http: HttpClient) {
    this.apiUrl$ = config.get().pipe(map((cfg) => cfg.api.booking));
  }

  /**
   * Gets all bookings where the existing checkIn and checkOut dates
   * intersect with the given checkIn and checkOut dates
   *
   * @param checkIn string
   * @param checkOut string
   */
  getByDateRange(checkIn: string, checkOut: string): Observable<Booking[]> {
    const params = new HttpParams().set('checkIn', checkIn).set('checkOut', checkOut);
    return this.apiUrl$.pipe(
      concatMap((url) => this.http.get<Booking[]>(`${url}/byDateRange`, { params }))
    );
  }

  /**
   * Represents the _Booking Service_ `delete` method
   *
   * @param id string
   */
  delete(id: string): Observable<boolean> {
    return this.apiUrl$.pipe(
      concatMap((url) => this.http.delete<boolean>(url, { params: { id } }))
    );
  }

  /**
   * Represents the _Booking Service_ `get` method
   *
   * @param id string
   */
  get(id?: string): Observable<Booking[]> {
    const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.apiUrl$.pipe(concatMap((url) => this.http.get<Booking[]>(url, options)));
  }

  /**
   * Represents the _Booking Service_ `post` method
   *
   * @param booking Booking
   */
  post(booking: Booking): Observable<boolean> {
    return this.apiUrl$.pipe(concatMap((url) => this.http.post<boolean>(url, booking)));
  }

  /**
   * Represents the _Booking Service_ `put` method
   *
   * @param booking Booking
   */
  put(booking: Booking): Observable<Booking> {
    return this.apiUrl$.pipe(concatMap((url) => this.http.put<Booking>(url, booking)));
  }
}
