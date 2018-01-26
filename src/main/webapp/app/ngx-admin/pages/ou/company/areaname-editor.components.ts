import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";

declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let area of areas" [value]="area.areaName">{{area.areaName}}</option>
        </select>


    `,

})
export class AreaNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    areas;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/areas').map( res => res.json()).subscribe(
            data =>{this.areas = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        let i = $('option:selected').index();
        // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        //
        this.cell.getRow().getCells()[4].newValue = this.areas[i].areaCode;
        this.cell.newValue = this.sure
    }
}
