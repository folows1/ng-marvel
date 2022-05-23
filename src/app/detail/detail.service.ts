import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IDetail } from './detail';
import { IItem } from '../item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient, private router: Router) { }

  fetch(id: number, type: string): Observable<any> | number {
    try {
      return this.http.get(`${environment.API_URL}${type}/${id}?${environment.API_KEY}`);
    } catch (error) {
      this.router.navigate(['notfound']);
      return 0;
    }
  }
}

