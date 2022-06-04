import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { HerokuService } from 'src/heroku.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  API_KEY = '';

  constructor(private http: HttpClient, private heroku: HerokuService) {
    this.heroku.fetch().subscribe(data => {
      this.API_KEY = data;
    },
      error => {
        /* this.API_KEY = error.text; */
    })
  }

  fetch(id: number, type: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${type}/${id}?${this.API_KEY}`);
  }
}

