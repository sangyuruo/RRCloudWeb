import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let company of companies" [value]="company.companyCode">{{company.companyCode}}</option>
        </select>
     
  `,

})
export class CpCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    companies;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/companies').map( res => res.json()).subscribe(
            data =>{this.companies = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo() {
        this.cell.newValue = this.sure;
    }
}
