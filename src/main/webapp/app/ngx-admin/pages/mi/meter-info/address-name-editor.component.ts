import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.addressName">{{meterInfo.addressName}}</option>
        </select>
     
  `,

})
export class AddressNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/addresses?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo() {
        let i = $('option:selected').index();
        this.cell.getRow().getCells()[3].newValue = this.meterInfos[i].addressCode;
        this.cell.newValue = this.sure;
    }
}
