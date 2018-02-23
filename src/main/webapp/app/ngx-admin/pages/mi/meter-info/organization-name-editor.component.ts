import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.orgName">{{meterInfo.orgName}}</option>
        </select>
     
  `,

})
export class OrganizationNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    constructor(private http: Http,
                private http1:HttpClient,) {
        super();
        this.http.get('/emcloudou/api/organizations?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo() {
       /* //后台获取方式
        const params= new HttpParams().set('orgName',obj);
        this.http1.get('/emcloudou/api/organizations/by-org-name',{params})
            .subscribe(data=>
                this.cell.getRow().getCells()[5].newValue = data[0].orgCode
            )*/
        //let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;
        //this.cell.getRow().getCells()[14].newValue = this.meterInfos[i].orgCode;
        this.cell.getRow().getCells()[14].newValue = this.meterInfos[i].enable;
        this.cell.newValue = this.sure;
    }
}
