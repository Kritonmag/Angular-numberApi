import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberApiService {
  private apiUrl = 'http://numbersapi.com'

  constructor(private http: HttpClient) { }

  getNumberFact(number: number): Observable<string> {
    const url = `${this.apiUrl}/${number}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
