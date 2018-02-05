import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { MeterCategoryRule } from './meter-category-rule.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MeterCategoryRuleService {

    private resourceUrl = '/emcloudarc/api/meter-category-rules';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(meterCategoryRule: MeterCategoryRule): Observable<MeterCategoryRule> {
        const copy = this.convert(meterCategoryRule);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(meterCategoryRule: MeterCategoryRule): Observable<MeterCategoryRule> {
        const copy = this.convert(meterCategoryRule);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<MeterCategoryRule> {
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
     * Convert a returned JSON object to MeterCategoryRule.
     */
    private convertItemFromServer(json: any): MeterCategoryRule {
        const entity: MeterCategoryRule = Object.assign(new MeterCategoryRule(), json);
        entity.createTime = this.dateUtils
            .convertDateTimeFromServer(json.createTime);
        entity.updateTime = this.dateUtils
            .convertDateTimeFromServer(json.updateTime);
        return entity;
    }

    /**
     * Convert a MeterCategoryRule to a JSON which can be sent to the server.
     */
    private convert(meterCategoryRule: MeterCategoryRule): MeterCategoryRule {
        const copy: MeterCategoryRule = Object.assign({}, meterCategoryRule);

        copy.createTime = this.dateUtils.toDate(meterCategoryRule.createTime);

        copy.updateTime = this.dateUtils.toDate(meterCategoryRule.updateTime);
        return copy;
    }
}
