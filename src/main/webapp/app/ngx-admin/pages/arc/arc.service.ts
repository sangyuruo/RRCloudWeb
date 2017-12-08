import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";
import {Company} from "../../../entities/company/company.model";


@Injectable()
export class ArcService {


  constructor(private http:Http){}




    getDataAlarmRule(){
        return this.http.get('/emcloudarc/api/alarm-rules?size=2000')
            .map(res => res.json())
    }
    getDataRuleAttributes(){
        return this.http.get('/emcloudarc/api/rule-attributes?size=2000')
            .map(res => res.json())
    }
    getDataMeterRule(){
        return this.http.get('/emcloudarc/api/meter-rules?size=2000')
            .map(res => res.json())
    }

    deleteAlarmRule(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/alarm-rules'}/${id}`);
    }
    deleteRuleAttributes(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/rule-attributes'}/${id}`);
    }
    deleteMeterRule(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudarc/api/meter-rules'}/${id}`);
    }

    createAlarmRule(date) {
        return this.http.post('/emcloudarc/api/alarm-rules',date).map( res =>res.json());
    }
    updateAlarmRule(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/alarm-rules',date).map( res =>res.json());
    }
    createMeterRule(date) {
        return this.http.post('/emcloudarc/api/meter-rules',date).map( res =>res.json());
    }
    updateMeterRule(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/meter-rules',date).map( res =>res.json());
    }
    createRuleAttributes(date) {
        return this.http.post('/emcloudarc/api/rule-attributes',date).map( res =>res.json());
    }
    updateRuleAttributes(date):  Observable<Response>{
        return this.http.put('/emcloudarc/api/rule-attributes',date).map( res =>res.json());
    }

}


