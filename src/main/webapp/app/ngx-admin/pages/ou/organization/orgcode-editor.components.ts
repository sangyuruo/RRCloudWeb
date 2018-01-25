import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
@Component({
    template: `
        <!--<select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">-->
            <!--<option *ngFor="let organization of organizations" [value]="organization.orgCode">{{organization.orgCode}}</option>-->
        <!--</select>-->
        <input list="pasta" [(ngModel)]="sure"
               (ngModelChange)="setInfo()" class="form-control short-input"
        >
        <div>
            <datalist id="pasta">
                <option *ngFor="let organization of organizations" [value]="organization.orgCode"></option>
            </datalist>

        </div>
    `,

})
export class OrgCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    organizations;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudou/api/organizations').map( res => res.json()).subscribe(
            data =>{this.organizations = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo() {
        this.cell.newValue = this.sure;
    }
}
