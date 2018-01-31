import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.companyName">{{meterInfo.companyName}}</option>
        </select>
     
  `,

})
export class CompanyNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    constructor(private http: Http,
                 private http1:HttpClient,) {
        super();
        this.http.get('/emcloudou/api/companies?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo() {
        /*//后台获取方式
        const params= new HttpParams().set('companyName',obj);
        this.http1.get('/emcloudou/api/companies/by-company-name',{params})
            .subscribe(data=>
                    this.cell.getRow().getCells()[7].newValue = data[0].companyCode

            )*/
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[15].newValue = this.meterInfos[i].companyCode;
        this.cell.newValue = this.sure;
    }
}
