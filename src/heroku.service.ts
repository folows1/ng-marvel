import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HerokuService {

    constructor(private http: HttpClient) { }

    fetch(): Observable<string> {
        return this.http.get<string>(`https://ng-marvel.herokuapp.com/xpto`);
    }

}

