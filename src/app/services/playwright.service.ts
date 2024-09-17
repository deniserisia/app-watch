import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaywrightService {
  
  private resultsUrl = 'http://localhost:3000/results'; // URL do backend que serve os resultados

  constructor(private http: HttpClient) {}

  getTestResults(): Observable<any> {
    return this.http.get<any>(this.resultsUrl);
  }
}