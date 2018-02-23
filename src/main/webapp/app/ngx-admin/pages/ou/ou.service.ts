import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {Http,Response} from "@angular/http";

import {TreeNode} from "primeng/primeng";


@Injectable()
export class OuService {

    constructor(private http: Http) {
    }


    getCompany() {
        return this.http.get('/emcloudou/api/companies?size=2000')
            .map(res => res.json())
    }

    getOrganization() {
        return this.http.get('/emcloudou/api/organizations?size=2000')
            .map(res => res.json())
    }

    deleteCompany(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudou/api/companies'}/${id}`);
    }

    deleteOrganization(id: number): Observable<Response> {
        return this.http.delete(
            `${'/emcloudou/api/organizations'}/${id}`);
    }

    saveCompany(data) {
        return this.http.post('/emcloudou/api/companies', data)
            .map(res => res.json());
    }

    saveOrganization(data) {
        return this.http.post('/emcloudou/api/organizations', data)
            .map(res => res.json());
    }

    updateCompany(data): Observable<Response> {
        return this.http.put('/emcloudou/api/companies', data)
            .map(res => res.json());
    }

    updateOrganization(data): Observable<Response> {
        return this.http.put('/emcloudou/api/organizations', data)
            .map(res => res.json());
    }
    getFiles(){
        return this.http.get('/emcloudou/api/organizations/tree')
            .toPromise()
            .then(res => <TreeNode[]> res.json());  //一次性取根节点
    }
    getdataByParentOrgCode(ParentCode:string){
        return this.http.get(`/emcloudou/api/organizations/by-parent-org-code/?parentOrgCode=${ParentCode}`)
            .map(res=>res.json());           //取数据
    }
    getdataByOrgCode(OrgCode:string){
        return this.http.get(`emcloudou/api/organizations/by-org-code/${OrgCode}`)
            .map(res=>res.json());          //取数据
    }
    getTreeRoot(){
        return this.http.get('/emcloudou/api/organizations/tree ')
            .toPromise()
            .then(res => <TreeNode[]> res.json()); //取根节点
    }
    LazyLodeNode(OrgCode:string){
        return this.http.get(`emcloudou/api/organizations/nextTree/?parentOrgCode=${OrgCode}`)
            .map(res=>res.json());  //懒加载节点
    }
}


