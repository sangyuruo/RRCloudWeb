import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Dictionaryclassify } from './dictionaryclassify.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class DictionaryclassifyService {

    private resourceUrl = '/emclouddict/api/dictionaryclassifies';

    constructor(private http: Http) { }

    create(dictionaryclassify: Dictionaryclassify): Observable<Dictionaryclassify> {
        const copy = this.convert(dictionaryclassify);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(dictionaryclassify: Dictionaryclassify): Observable<Dictionaryclassify> {
        const copy = this.convert(dictionaryclassify);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Dictionaryclassify> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Dictionaryclassify.
     */
    private convertItemFromServer(json: any): Dictionaryclassify {
        const entity: Dictionaryclassify = Object.assign(new Dictionaryclassify(), json);
        return entity;
    }

    /**
     * Convert a Dictionaryclassify to a JSON which can be sent to the server.
     */
    private convert(dictionaryclassify: Dictionaryclassify): Dictionaryclassify {
        const copy: Dictionaryclassify = Object.assign({}, dictionaryclassify);
        return copy;
    }
}
