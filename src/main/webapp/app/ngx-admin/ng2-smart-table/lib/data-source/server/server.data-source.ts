import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../helpers';

import 'rxjs/add/operator/toPromise';
import {JhiDateUtils} from "ng-jhipster";



export class ServerDataSource extends LocalDataSource {

  protected conf: ServerSourceConf;

  protected lastRequestCount: number = 0;


  constructor(protected http: Http, conf: ServerSourceConf | {} = {},
    protected  dateUtils: JhiDateUtils) {

    super();

    this.conf = new ServerSourceConf(conf);

    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(){
      return this.requestElements().map(res => {
          this.lastRequestCount = this.extractTotalFromResponse(res);
          this.data = this.extractDataFromResponse(res);

          //新增
          const result = [];
          for (let i = 0; i < this.data.length; i++) {
              result.push(this.convertItemFromServer(this.data[i]));
          }
          return result;
          // return this.data;
      }).toPromise();
  }
    //新增
      convertItemFromServer(json: any){
          const entity  = Object.assign(json);
          entity.createTime = this.dateUtils.convertDateTimeFromServer(json.createTime);
          entity.updateTime = this.dateUtils.convertDateTimeFromServer(json.updateTime);
          entity.recordTime = this.dateUtils.convertDateTimeFromServer(json.recordTime);
          return entity;
      }


  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  protected extractDataFromResponse(res: any): Array<any> {
    const rawData = res.json();
    const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

    if (data instanceof Array) {
      return data;
    }

    throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
  }

  /**
   * Extracts total rows count from the server response
   * Looks for the count in the heders first, then in the response body
   * @param res
   * @returns {any}
   */
  protected extractTotalFromResponse(res: any): number {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.json();
      return getDeepFromObject(rawData, this.conf.totalKey, 0);
    }
  }

  protected requestElements(): Observable<any> {
    return this.http.get(this.conf.endPoint, this.createRequestOptions());
  }

  protected createRequestOptions(): RequestOptionsArgs {
    let requestOptions: RequestOptionsArgs = {};
    requestOptions.params = new URLSearchParams();

    requestOptions = this.addSortRequestOptions(requestOptions);
    requestOptions = this.addFilterRequestOptions(requestOptions);
    return this.addPagerRequestOptions(requestOptions);
  }

  protected addSortRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    const searchParams: URLSearchParams = <URLSearchParams>requestOptions.params;

    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        searchParams.set(this.conf.sortFieldKey, fieldConf.field);
        searchParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
      });
    }

    return requestOptions;
  }

  protected addFilterRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    const searchParams: URLSearchParams = <URLSearchParams>requestOptions.params;

    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf: any) => {
        if (fieldConf['search']) {
          searchParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
        }
      });
    }

    return requestOptions;
  }

  protected addPagerRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    const searchParams: URLSearchParams = <URLSearchParams>requestOptions.params;

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
        let pageParams : string = (this.pagingConf['page']-1).toString();// 定义变量转化为字符串
      searchParams.set(this.conf.pagerPageKey, pageParams);
      searchParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
    }

    return requestOptions;
  }
}
