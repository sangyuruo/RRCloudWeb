import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";

declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" 
                (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let comPoint of comPoints" [value]="comPoint.orgName">{{comPoint.orgName}}</option>
        </select>
     
  `,

})
export class OrgNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    comPoints;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/organizations').map( res => res.json()).subscribe(
            data =>{this.comPoints = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        let i = $('option:selected').index();
        this.cell.getRow().getCells()[5].newValue = this.comPoints[i].orgCode;
        this.cell.newValue = this.sure
    }
}
