import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathApiService {
  private apiUrl = 'http://numbersapi.com'

  constructor(private http: HttpClient) { }

  getMathFact(number: number): Observable<string> {
    const url = `${this.apiUrl}/${number}/math`;
    return this.http.get(url, { responseType: 'text' });
  }
}
