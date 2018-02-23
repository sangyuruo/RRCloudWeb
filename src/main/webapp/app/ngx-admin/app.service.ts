import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    private organizationes: any;
    private companies: any;
    private compoints:any;
    private addresses:any;

    constructor(private http: Http) { }

    initOrganizationesDatas(){
        // this.http.get('/emcloudou/api/organizations?size=2000').map(res=>res.json()).subscribe(
        //     data => {
        //         this.organizationes = data;
        //     })
    }
    getOrganizationes(): any {
        return this.organizationes;
    }

    initAddressesDatas(){
        // this.http.get('/emcloudloc/api/addresses?size=2000').map(res=>res.json()).subscribe(
        //     data => {
        //         this.addresses = data;
        //     })
    }
    getAddresses(): any {
        return this.addresses;
    }



    initCompaniesDatas(){
        // this.http.get('/emcloudou/api/companies?size=2000').map(res=>res.json()).subscribe(
        //     data => {
        //         this.companies = data;
        //     })
    }
    getCompanies(): any {
        return this.companies;
    }


    initCompointsDatas(){
        // this.http.get('/emcloudcpi/api/compoints?size=2000').map(res=>res.json()).subscribe(
        //     data => {
        //         this.compoints = data;
        //     })
    }
    getCompoints(): any {
        return this.compoints;
    }


}
