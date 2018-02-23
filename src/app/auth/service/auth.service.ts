import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class AuthService {
    private url: string = 'http://localhost:4040/auth/login';
    private checkUrl: string = 'http://localhost:4040/auth';

    constructor(
        private http: Http
    ) {
    }

    login(user) {        
        return this.http.post(this.url, user)
        .map(this.mapData)
        .catch(this.errHandler)
    }

    checkBackend() {
        this.http.get(this.checkUrl, this.reqOptions()).subscribe(
            data => {
                console.log('connecting to backedn', data['records'])
            }, error => {
                console.log('not firing back end', error)
            }
        )
    }

    getW3service() {
        return this.http.get('https://www.w3schools.com/angular/customers.php').map(res => res.json());
    }

    mapData(res : Response){
        let body = res.json();
        return body
    }

    errHandler(err : any){
        return Observable.throw(err);
    }


    reqOptions() {
        let headers = new Headers({ 'Content-type': 'applications/json' });
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}
