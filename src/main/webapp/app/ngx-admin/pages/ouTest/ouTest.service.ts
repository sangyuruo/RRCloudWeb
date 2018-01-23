import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";


@Injectable()
export class OuTestService {

    constructor(private http: Http) {
    }


    getCompany() {
        return this.http.get('/emcloudou/api/companies?size=2000')
            .map(res => res.json())
    }

    deleteCompany(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudou/api/companies'}/${id}`);
    }

    saveCompany(data) {
        return this.http.post('/emcloudou/api/companies', data)
            .map(res => res.json());
    }

    updateCompany(data): Observable<Response> {
        return this.http.put('/emcloudou/api/companies', data)
            .map(res => res.json());
    }


}


