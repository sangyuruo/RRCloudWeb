import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JhiDateUtils } from 'ng-jhipster';

import { MultiwaySwitch } from './multiway-switch.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class MultiwaySwitchService {

    private resourceUrl = '/emcloudmi/api/multiway-switches';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(multiwaySwitch: MultiwaySwitch): Observable<MultiwaySwitch> {
        const copy = this.convert(multiwaySwitch);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(multiwaySwitch: MultiwaySwitch): Observable<MultiwaySwitch> {
        const copy = this.convert(multiwaySwitch);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<MultiwaySwitch> {
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
     * Convert a returned JSON object to MultiwaySwitch.
     */
    private convertItemFromServer(json: any): MultiwaySwitch {
        const entity: MultiwaySwitch = Object.assign(new MultiwaySwitch(), json);
        entity.recordTime = this.dateUtils
            .convertDateTimeFromServer(json.recordTime);
        return entity;
    }

    /**
     * Convert a MultiwaySwitch to a JSON which can be sent to the server.
     */
    private convert(multiwaySwitch: MultiwaySwitch): MultiwaySwitch {
        const copy: MultiwaySwitch = Object.assign({}, multiwaySwitch);

        copy.recordTime = this.dateUtils.toDate(multiwaySwitch.recordTime);
        return copy;
    }
}
