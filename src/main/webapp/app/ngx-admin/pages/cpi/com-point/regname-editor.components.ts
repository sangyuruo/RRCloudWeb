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
               (ngModelChange)="setInfo()" class="form-control short-input"
        >
        <div>
            <datalist id="pasta">
                <option *ngFor="let compoint of compoints" [value]="compoint.registerName"></option>
            </datalist>

        </div>
    `,

})
export class regNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    compoints;
    sure ;

    constructor(private http: Http,
                private  http1:HttpClient
                ) {
        super();
        this.http.get('/emcloudcpi/api/compoints').map( res => res.json()).subscribe(
            data =>{this.compoints = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo() {
        // let i = $('option:selected').index();
       // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;

        this.cell.getRow().getCells()[0].newValue = this.compoints[i].registerCode;

        this.cell.newValue = this.sure
    }
}
