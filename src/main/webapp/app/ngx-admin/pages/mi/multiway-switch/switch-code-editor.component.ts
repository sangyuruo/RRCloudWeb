import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let multiwaySwitch of multiwaySwitchs" [value]="multiwaySwitch.switchCode">{{multiwaySwitch.switchCode}}</option>
        </select>
     
  `,

})
export class MsiSwitchCodeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    multiwaySwitchs;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudmi/api/multiway-switch-infos?size=2000').map( res => res.json()).subscribe(
            data =>{this.multiwaySwitchs = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
