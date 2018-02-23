import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
import {HttpClient, HttpParams} from "@angular/common/http";

declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" 
                (ngModelChange)="setInfo(sure)" #name [name]="cell.getId()">
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
    constructor(private http: Http,
                private  http1:HttpClient
                ) {
        super();
        this.http.get('/emcloudou/api/organizations').map( res => res.json()).subscribe(
            data =>{this.comPoints = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        // let i = $('option:selected').index();
       // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;

        this.cell.getRow().getCells()[4].newValue = this.comPoints[i].orgCode;
        this.cell.newValue = this.sure
    }
    // setInfo(obj) {
    //     //后台获取方式
    //
    //     const params= new HttpParams().set('orgName',obj);
    //     this.http1.get('/emcloudou/api/organizations/by-org-name',{params})
    //         .subscribe(data=>
    //             this.cell.getRow().getCells()[5].newValue = data[0].orgCode
    //
    //         )
    //
    //     // let i = $('option:selected').index();
    //     // this.cell.getRow().getCells()[4].newValue = this.organizations[i].parentOrgName;
    //     this.cell.newValue = this.sure;
    // }
}
