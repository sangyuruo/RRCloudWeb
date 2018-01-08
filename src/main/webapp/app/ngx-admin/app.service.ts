import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    private organizationes: any;
    private companies: any;
    constructor(private http: Http) { }

    initOrganizationesDatas(){
        this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.organizationes = data;
            })
    }
    getOrganizationes(): any {
        return this.organizationes;
    }



    initCompaniesDatas(){
        this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
            data => {
                this.companies = data;
            })
    }
    getCompanies(): any {
        return this.companies;
    }


}
