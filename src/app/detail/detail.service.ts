import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { HerokuService } from 'src/heroku.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient, private heroku: HerokuService) { }

  fetch(id: number, type: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${type}/${id}?${this.heroku.getAPIKEY()}`);
  }
}

