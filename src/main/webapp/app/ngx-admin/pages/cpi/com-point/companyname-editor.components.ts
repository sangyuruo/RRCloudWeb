import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let comPoint of comPoints" [value]="comPoint.companyName">{{comPoint.companyName}}</option>
        </select>

    `,

})
export class CompanyNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    comPoints;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/companies').map( res => res.json()).subscribe(
            data =>{this.comPoints = data;
                this.sure=this.cell.newValue
            }

        )
    }
    ngAfterViewInit() {}

    setInfo() {
        let i = $('option:selected').index();
        this.cell.getRow().getCells()[7].newValue = this.comPoints[i].companyCode;
        this.cell.newValue = this.sure
    }
}
