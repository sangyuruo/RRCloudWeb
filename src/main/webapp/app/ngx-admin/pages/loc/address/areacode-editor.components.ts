import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let address of addresses" [value]="address.areaCode">{{address.areaCode}}</option>
        </select>
     
  `,

})
export class AreaCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    addresses;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/areas').map( res => res.json()).subscribe(
            data =>{this.addresses = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
