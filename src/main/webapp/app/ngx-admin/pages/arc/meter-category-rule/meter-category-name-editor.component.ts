import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
declare let $:any;

@Component({
    template: `
        <select class="form-control"   [(ngModel)]="sure" (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
            <option [value]="meterInfo.meterType"   *ngFor="let meterInfo of meterInfos ">{{meterInfo.meterType}}</option>
        </select>

    `,

})
export class MeterCategoryNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;


    constructor(private http: Http,
                private http1:HttpClient,) {
        super();
        this.http.get('/emcloudmi/api/meter-category-infos?size=2000').map( res => res.json()).subscribe(
            data =>{
                this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo(){
       // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;
        this.cell.getRow().getCells()[0].newValue =  this.meterInfos[i].meterTypeCode;
        this.cell.newValue = this.sure;
    }
}
