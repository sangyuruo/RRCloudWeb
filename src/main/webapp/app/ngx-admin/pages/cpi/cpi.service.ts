import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import {Company} from "../../../entities/company/company.model";


@Injectable()
export class CpiService {

  constructor(private http:Http){}







    getDataComPoint()
    {
        return this.http.get('/emcloudcpi/api/compoints?size=2000')
            .map(res => res.json())
    }
    getDataComPointStatus()
    {
        return this.http.get('/emcloudcpi/api/compointstatuses?size=2000')
            .map(res => res.json())
    }
    deleteComPoint(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emcloudcpi/api/compoints'}/${id}`);
    }
    deleteComPointStatus(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emcloudcpi/api/compointstatuses'}/${id}`);
    }



}


