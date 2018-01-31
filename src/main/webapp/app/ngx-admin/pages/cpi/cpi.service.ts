import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";


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


    createComPoint(data)
    {
        return this.http.post('/emcloudcpi/api/compoints',data)
            .map(res => res.json());
    }
    createComPointStatus(data)
    {
        return this.http.post('/emcloudcpi/api/compointstatuses',data)
            .map(res => res.json());
    }


    updateComPoint(data):Observable<Response>
    {
        return this.http.put('/emcloudcpi/api/compoints',data)
            .map(res => res.json());
    }
    updateComPointStatus(data):Observable<Response>
    {
        return this.http.put('/emcloudcpi/api/compointstatuses',data)
            .map(res => res.json());
    }




}


