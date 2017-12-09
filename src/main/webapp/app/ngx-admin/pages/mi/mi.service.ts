import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";


@Injectable()
export class MiService {

  constructor(private http:Http){}

    getDataMeterCategoryInfo(){
        return this.http.get('/emcloudmi/api/meter-category-infos?size=2000')
            .map(res => res.json())
    }
    getDataMeterInfo(){
        return this.http.get('/emcloudmi/api/meter-infos?size=2000')
            .map(res => res.json())
    }
    getDataMeterStatus(){
        return this.http.get('/emcloudmi/api/meter-statuses?size=2000')
            .map(res => res.json())
    }
    getDataMultiwaySwitchInfo(){
        return this.http.get('/emcloudmi/api/multiway-switch-infos?size=2000')
            .map(res => res.json())
    }
    getDataMultiwaySwitch(){
        return this.http.get('/emcloudmi/api/multiway-switches?size=2000')
            .map(res => res.json())
    }

    deleteMeterCategoryInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-category-infos'}/${id}`);
    }
    deleteMeterInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-infos'}/${id}`);
    }
    deleteMeterStatus(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/meter-statuses'}/${id}`);
    }
    deleteMultiwaySwitch(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/multiway-switches'}/${id}`);
    }
    deleteMultiwaySwitchInfo(id: number): Observable<Response> {
        return this.http.delete(`${'/emcloudmi/api/multiway-switch-infos'}/${id}`);
    }

    createMeterCategoryInfo(date) {
        return this.http.post('/emcloudmi/api/meter-category-infos',date).map( res =>res.json());
    }
    updateMeterCategoryInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-category-infos',date).map( res =>res.json());
    }
    createMeterInfo(date) {
        return this.http.post('/emcloudmi/api/meter-infos',date).map( res =>res.json());
    }
    updateMeterInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-infos',date).map( res =>res.json());
    }
    createMeterStatus(date) {
        return this.http.post('/emcloudmi/api/meter-statuses',date).map( res =>res.json());
    }
    updateMeterStatus(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/meter-statuses',date).map( res =>res.json());
    }
    createMultiwaySwitch(date) {
        return this.http.post('/emcloudmi/api/multiway-switches',date).map( res =>res.json());
    }
    updateMultiwaySwitch(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/multiway-switches',date).map( res =>res.json());
    }
    createMultiwaySwitchInfo(date) {
        return this.http.post('/emcloudmi/api/multiway-switch-infos',date).map( res =>res.json());
    }
    updateMultiwaySwitchInfo(date):  Observable<Response>{
        return this.http.put('/emcloudmi/api/multiway-switch-infos',date).map( res =>res.json());
    }

}


