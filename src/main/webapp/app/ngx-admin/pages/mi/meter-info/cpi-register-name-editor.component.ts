import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.registerName">{{meterInfo.registerName}}</option>
        </select>
     
  `,

})
export class CpiRegisterNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    constructor(private http: Http,
                private http1:HttpClient,) {
        super();
        this.http.get('/emcloudcpi/api/compoints?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(obj) {
        //后台获取方式
        const params= new HttpParams().set('registerName',obj);
        this.http1.get('/emcloudcpi/api/compoint/by-register-name',{params})
            .subscribe(data=>
                this.cell.getRow().getCells()[9].newValue = data[0].comPointCode
            )
        /*let i = $('option:selected').index();
        this.cell.getRow().getCells()[9].newValue = this.meterInfos[i].comPointCode;*/
        this.cell.newValue = this.sure;
    }
}
