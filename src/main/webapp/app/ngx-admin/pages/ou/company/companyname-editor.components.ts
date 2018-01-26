import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let company of companies" [value]="company.companyName">{{company.companyName}}</option>
        </select>

    `,

})
export class CompanyNameEditorComponent extends DefaultEditor implements AfterViewInit {

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
        // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        // this.cell.getRow().getCells()[1].newValue = this.companies[i].companyCode;
        // this.cell.getRow().getCells()[2].newValue = this.companies[i].parentCompanyName;
        this.cell.newValue = this.sure
    }
}
