import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
        <option *ngFor="let address of addresses" [value]="address.areaName">{{address.areaName}}</option>
        </select>
     
  `,

})
export class AreaNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    addresses;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/areas?size=2000').map( res => res.json()).subscribe(
            data =>{this.addresses = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[4].newValue = this.addresses[i].areaCode;
        this.cell.newValue = this.sure
    }
}
