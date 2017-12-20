import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let comPointStatus of compointstatuses" [value]="comPointStatus.comPointCode">{{comPointStatus.comPointCode}}</option>
        </select>
     
  `,

})
export class CompointCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    compointstatuses;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudcpi/api/compoints').map( res => res.json()).subscribe(
            data =>{this.compointstatuses = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
