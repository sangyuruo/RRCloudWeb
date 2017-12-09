import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import {Company} from "../../../entities/company/company.model";


@Injectable()
export class DictService {


    constructor(private http:Http){}

    createDictionary(data)
    {
        this.http.post('/emclouddict/api/dictionaries',data)
            .map(res => res.json())
    }
    updateDictionary(data):Observable<Response>
    {
        return this.http.put('/emclouddict/api/dictionaries',data)
            .map(res => res.json())
    }
    createDictionaryClassify(data)
    {
        this.http.post('/emclouddict/api/dictionaryclassifies',data)
            .map(res => res.json())
    }

    updateDictionaryClassify(data):Observable<Response>
    {
        return this.http.put('/emclouddict/api/dictionaryclassifies',data)
            .map(res => res.json())
    }

    getDataDictionary()
    {
        return this.http.get('/emclouddict/api/dictionaries?size=2000')
            .map(res => res.json())
    }
    getDataDictionaryClassify()
    {
        return this.http.get('/emclouddict/api/dictionaryclassifies?size=2000')
            .map(res => res.json())

    }

    deleteDictionary(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emclouddict/api/dictionaries'}/${id}`);
    }
    deleteDictionaryClassify(id: number):Observable<Response>
    {
        return this.http.delete(`${'/emclouddict/api/dictionaryclassifies'}/${id}`);
    }

}


