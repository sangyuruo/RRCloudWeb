import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.dictClassifyValue">{{meterInfo.dictClassifyValue}}</option>
        </select>
     
  `,

})
export class DictClassifyValueEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    new=[];
    meterInfos;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emclouddict/api/dictionaryclassifies/by-dict-code?dictCode=METER_TYPE').map( res => res.json()).subscribe(
            data =>{
                 for(let i=0;i<data.length;i++){
                    if(data[i].dictCode==='METER_TYPE'){
                        this.new.push(data[i]);
                        console.log(data.length);

                    }
                }

                this.meterInfos = this.new;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
