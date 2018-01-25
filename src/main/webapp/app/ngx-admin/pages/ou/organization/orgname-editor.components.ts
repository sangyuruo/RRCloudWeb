import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
    template: `
        <!--<select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">-->
        <!--<option *ngFor="let organization of organizations" [value]="organization.orgCode">{{organization.orgCode}}</option>-->
        <!--</select>-->
        <input list="pasta" [(ngModel)]="sure"
               (ngModelChange)="setInfo(sure)" class="form-control short-input"
        >
        <div>
            <datalist id="pasta">
                <option *ngFor="let organization of organizations" [value]="organization.orgName"></option>
            </datalist>

        </div>
    `,

})
export class OrgNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    organizations;
    sure ;

    constructor(private http: Http,
                private  http1:HttpClient
                ) {
        super();
        this.http.get('/emcloudou/api/organizations').map( res => res.json()).subscribe(
            data =>{this.organizations = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo(obj) {
        //后台获取方式
        const params= new HttpParams().set('orgName',obj);
        this.http1.get('/emcloudou/api/organizations/by-org-name',{params})
            .subscribe(data=>
                    this.cell.getRow().getCells()[1].newValue = data[0].orgCode

                )

        // let i = $('option:selected').index();
        // this.cell.getRow().getCells()[4].newValue = this.organizations[i].parentOrgName;
        this.cell.newValue = this.sure;
    }
}
