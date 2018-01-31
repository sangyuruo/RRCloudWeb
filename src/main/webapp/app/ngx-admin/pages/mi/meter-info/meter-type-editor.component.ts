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
export class MeterTypeEditorComponent extends DefaultEditor implements AfterViewInit {

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
        //后台获取方式
      /*  const params= new HttpParams().set('meterType',obj);
        this.http1.get('/emcloudmi/api/meter-category-infos/by-meter-type',{params})
            .subscribe(data=>
                {  /!* console.log(data);*!/
                    this.cell.getRow().getCells()[1].newValue =  data[0].meterType;
                    this.cell.getRow().getCells()[11].newValue = data[0].meterTypeCode;
                    this.cell.getRow().getCells()[13].newValue = data[0].startOffset;
                    this.cell.getRow().getCells()[14].newValue = data[0].numberOfRegisters;
                    this.cell.getRow().getCells()[15].newValue = data[0].controlAddress;}
            )*/

        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[0].newValue =  this.meterInfos[i].meterType;
        this.cell.getRow().getCells()[7].newValue =  this.meterInfos[i].meterTypeCode;
        this.cell.getRow().getCells()[9].newValue =  this.meterInfos[i].startOffset;
        this.cell.getRow().getCells()[10].newValue =  this.meterInfos[i].numberOfRegisters;
        this.cell.getRow().getCells()[11].newValue =  this.meterInfos[i].controlAddress;
        this.cell.newValue = this.sure;
        /* this.cell.getRow().getCells()[7].newValue = 1;
         this.cell.getRow().getCells()[9].newValue = 2;
         this.cell.getRow().getCells()[10].newValue = 3;
         this.cell.getRow().getCells()[11].newValue = 4;
         console.log( this.cell.getRow().getCells()[0].newValue )*/
    }
}
