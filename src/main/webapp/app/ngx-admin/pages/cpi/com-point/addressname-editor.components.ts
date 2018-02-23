import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";

declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let comPoint of comPoints" [value]="comPoint.addressName">{{comPoint.addressName}}</option>
        </select>
       
     
  `,

})
export class AddressNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    comPoints;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudloc/api/addresses').map( res => res.json()).subscribe(
            data =>{this.comPoints = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;
        this.cell.getRow().getCells()[2].newValue = this.comPoints[i].addressCode;
        this.cell.newValue = this.sure
    }
}
