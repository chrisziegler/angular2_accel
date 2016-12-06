
// import { RACING } from './mocks';
import { Racing } from './racing-sched';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {

    constructor(private http: Http) {}

    getRaces() {
       return this.http.get('app/race-sched.json')
        .map(response => <Racing[]>response.json().data);
    }
}