import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";


@Injectable()
export class LocService {

    constructor(private http: Http) {
    }

    getDataAddress() {
        return this.http.get('/emcloudloc/api/addresses?size=2000')
            .map(res => res.json())
    }

    getDataArea() {
        return this.http.get('/emcloudloc/api/areas?size=2000')
            .map(res => res.json())
    }

    deleteAddress(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudloc/api/addresses'}/${id}`);
    }

    createAddress(data): Observable<Response> {
        return this.http.post('/emcloudloc/api/addresses', data)
            .map(res => res.json())
    }

    updateAddress(data): Observable<Response> {
        return this.http.put('/emcloudloc/api/addresses', data)
            .map(res => res.json())
    }


}


