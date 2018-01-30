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
export class CpNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    companies;
    sure ;
   //src='/emcloudou/api/organizations/by-company-name';
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/organizations').map( res => res.json()).subscribe(
            data =>{this.companies = data;
                this.sure=this.cell.newValue
            }

        )
    }
    ngAfterViewInit() {}

    setInfo() {
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();

       // this.cell.getRow().getCells()[1].newValue = this.companies[i].companyCode;
        this.cell.getRow().getCells()[6].newValue = this.companies[i].parentCode;

        this.cell.newValue = this.sure;
        // this.http.get(
        //     `${this.src}/${this.companies[i].companyName}`).subscribe(
        //             data=>
        //                 this.companies[i].parentOrgName = data
        //
        // )
    }
}
