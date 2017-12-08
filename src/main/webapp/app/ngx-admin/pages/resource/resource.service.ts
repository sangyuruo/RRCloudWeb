import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import {Company} from "../../../entities/company/company.model";


@Injectable()
export class ResourceService {

  constructor(private http:Http){}

    getDataResource(){
        return this.http.get('/emcloudresource/api/resources?size=2000')
            .map(res => res.json())
    }
    deleteResource(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudresource/api/resources'}/${id}`);
    }
    createResource(date) {
        return this.http.post('/emcloudresource/api/resources',date).map( res =>res.json());
    }
    updateResource(date):  Observable<Response>{
        return this.http.put('/emcloudresource/api/resources',date).map( res =>res.json());
    }

}


