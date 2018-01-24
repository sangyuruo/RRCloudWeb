import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
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
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/companies?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo() {
        let i = $('option:selected').index();
        this.cell.getRow().getCells()[7].newValue = this.meterInfos[i].companyCode;
        this.cell.newValue = this.sure;
    }
}
