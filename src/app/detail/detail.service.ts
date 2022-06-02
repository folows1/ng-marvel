import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  fetch(id: number, type: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${type}/${id}?${environment.API_KEY}`);
  }
}

