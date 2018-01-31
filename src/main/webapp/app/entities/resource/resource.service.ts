import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { Resource } from './resource.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ResourceService {

    private resourceUrl = '/emcloudresource/api/resources';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(resource: Resource): Observable<Resource> {
        const copy = this.convert(resource);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(resource: Resource): Observable<Resource> {
        const copy = this.convert(resource);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Resource> {
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
     * Convert a returned JSON object to Resource.
     */
    private convertItemFromServer(json: any): Resource {
        const entity: Resource = Object.assign(new Resource(), json);
        entity.createTime = this.dateUtils
            .convertDateTimeFromServer(json.createTime);
        entity.updateTime = this.dateUtils
            .convertDateTimeFromServer(json.updateTime);
        return entity;
    }

    /**
     * Convert a Resource to a JSON which can be sent to the server.
     */
    private convert(resource: Resource): Resource {
        const copy: Resource = Object.assign({}, resource);

        copy.createTime = this.dateUtils.toDate(resource.createTime);

        copy.updateTime = this.dateUtils.toDate(resource.updateTime);
        return copy;
    }
}
