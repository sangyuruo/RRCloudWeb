import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";


@Injectable()
export class ResourceService {

  constructor(private http:Http){}

    getDataResource(){
        return this.http.get('/emclouduaa/api/resources?size=2000')
            .map(res => res.json())
    }
    deleteResource(id: number): Observable<Response> {
        return this.http.delete(`${'/emclouduaa/api/resources'}/${id}`);
    }
    createResource(date) {
        return this.http.post('/emclouduaa/api/resources',date).map( res =>res.json());
    }
    updateResource(date):  Observable<Response>{
        return this.http.put('/emclouduaa/api/resources',date).map( res =>res.json());
    }

}


