import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";


@Injectable()
export class DictService {


    constructor(private http:Http){}

    createDictionary(data)
    {
       return this.http.post('/emclouddict/api/dictionaries',data)
            .map(res => res.json())
    }
    updateDictionary(data):Observable<Response>
    {
        return this.http.put('/emclouddict/api/dictionaries',data)
            .map(res => res.json())
    }
    createDictionaryClassify(data)
    {
       return this.http.post('/emclouddict/api/dictionary-classifies',data)
            .map(res => res.json())
    }

    updateDictionaryClassify(data):Observable<Response>
    {
        return this.http.put('/emclouddict/api/dictionary-classifies',data)
            .map(res => res.json())
    }

    getDataDictionary()
    {
        return this.http.get('/emclouddict/api/dictionaries?size=2000')
            .map(res => res.json())
    }
    getDataDictionaryClassify()
    {
        return this.http.get('/emclouddict/api/dictionary-classifies?size=2000')
            .map(res => res.json())
    }

    deleteDictionary(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emclouddict/api/dictionaries'}/${id}`);
    }
    deleteDictionaryClassify(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emclouddict/api/dictionary-classifies'}/${id}`);
    }

}


