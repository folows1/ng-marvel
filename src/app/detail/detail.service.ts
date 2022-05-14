import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IDetail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  detail = {} as IDetail;
  id: number = 0;
  type = '';

  constructor(private http: HttpClient) {
    this.getDetailObjectById();
  }

  fetch(id: number, type: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${type}/${id}?${environment.API_KEY}`);
  }

  getDetailObjectById() {
    this.fetch(this.id, this.type).subscribe(data => {
      this.detail = (data['data']['results'][0]) as IDetail;
    });
  }

  passParams(id: number, type: string) {
    this.id = id;
    this.type = type;
  }

  getDetailObjetct() {
    return this.detail;
  }
}

