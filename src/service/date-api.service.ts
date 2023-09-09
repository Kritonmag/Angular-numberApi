import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateApiService {
  private apiUrl = 'http://numbersapi.com'

  constructor(private http: HttpClient) { }

  getDateFact(month: number, day: number): Observable<string> {
    const url = `${this.apiUrl}/${month}/${day}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
