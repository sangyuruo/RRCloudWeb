import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { Compointstatus } from './compointstatus.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CompointstatusService {

    private resourceUrl = '/emcloudcpi/api/compointstatuses';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(compointstatus: Compointstatus): Observable<Compointstatus> {
        const copy = this.convert(compointstatus);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(compointstatus: Compointstatus): Observable<Compointstatus> {
        const copy = this.convert(compointstatus);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Compointstatus> {
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
     * Convert a returned JSON object to Compointstatus.
     */
    private convertItemFromServer(json: any): Compointstatus {
        const entity: Compointstatus = Object.assign(new Compointstatus(), json);
        entity.recordTime = this.dateUtils
            .convertDateTimeFromServer(json.recordTime);
        return entity;
    }

    /**
     * Convert a Compointstatus to a JSON which can be sent to the server.
     */
    private convert(compointstatus: Compointstatus): Compointstatus {
        const copy: Compointstatus = Object.assign({}, compointstatus);

        copy.recordTime = this.dateUtils.toDate(compointstatus.recordTime);
        return copy;
    }
}
