import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";

declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let address of addresses" [value]="address.addressName">{{address.addressName}}</option>
        </select>


    `,

})
export class AddressNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    addresses;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/addresses').map( res => res.json()).subscribe(
            data =>{this.addresses = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){

        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();

        this.cell.getRow().getCells()[5].newValue = this.addresses[i].addressCode;
        this.cell.newValue = this.sure
    }
}
