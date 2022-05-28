import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  fetch(id: number, type: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${type}/${id}?${environment.API_KEY}`);
  }
}

