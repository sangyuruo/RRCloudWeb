import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {Company} from "../../../entities/company/company.model";


@Injectable()
export class NfsService {


    constructor(private http: Http) {
    }

    getMessageTemplate() {
        return this.http.get('/emcloudnfs/api/message-templates?size=2000')
            .map(res => res.json())
    }

    deleteMessageTemplate(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudnfs/api/message-templates'}/${id}`);
    }

    saveMessageTemplate(data) {
        return this.http.post('/emcloudnfs/api/message-templates', data)
            .map(res => res.json());
    }

    updateMessageTemplate(data): Observable<Response> {
        return this.http.put('/emcloudnfs/api/message-templates', data)
            .map(res => res.json());
    }


}


