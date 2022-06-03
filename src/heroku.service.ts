import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HerokuService {

    API_KEY: any;

    constructor(private http: HttpClient) {
        this.fetch().subscribe(
            data => {
                this.API_KEY = data
            }
        )
    }

    fetch(): Observable<string> {
        return this.http.get<string>(`https://ng-marvel.herokuapp.com/xpto`);
    }

    getAPIKEY(): any {
        return this.API_KEY;
    }


}

