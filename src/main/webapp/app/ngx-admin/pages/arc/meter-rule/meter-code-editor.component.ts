import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let meterStatus of meterStatuss" [value]="meterStatus.meterCode">{{meterStatus.meterCode}}</option>
        </select>
     
  `,

})
export class MiMeterCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;i
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterStatuss;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudmi/api/meter-infos?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterStatuss = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
