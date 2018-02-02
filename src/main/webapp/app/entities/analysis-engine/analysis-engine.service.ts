import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { AnalysisEngine } from './analysis-engine.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class AnalysisEngineService {

    private resourceUrl = '/emcloudarc/api/analysis-engines';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(analysisEngine: AnalysisEngine): Observable<AnalysisEngine> {
        const copy = this.convert(analysisEngine);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(analysisEngine: AnalysisEngine): Observable<AnalysisEngine> {
        const copy = this.convert(analysisEngine);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<AnalysisEngine> {
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
     * Convert a returned JSON object to AnalysisEngine.
     */
    private convertItemFromServer(json: any): AnalysisEngine {
        const entity: AnalysisEngine = Object.assign(new AnalysisEngine(), json);
        entity.createTime = this.dateUtils
            .convertDateTimeFromServer(json.createTime);
        entity.updateTime = this.dateUtils
            .convertDateTimeFromServer(json.updateTime);
        return entity;
    }

    /**
     * Convert a AnalysisEngine to a JSON which can be sent to the server.
     */
    private convert(analysisEngine: AnalysisEngine): AnalysisEngine {
        const copy: AnalysisEngine = Object.assign({}, analysisEngine);

        copy.createTime = this.dateUtils.toDate(analysisEngine.createTime);

        copy.updateTime = this.dateUtils.toDate(analysisEngine.updateTime);
        return copy;
    }
}
