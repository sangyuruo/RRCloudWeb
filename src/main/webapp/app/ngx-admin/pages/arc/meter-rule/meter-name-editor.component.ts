import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";
declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let meterInfo of meterInfos" [value]="meterInfo.meterName">{{meterInfo.meterName}}</option>
        </select>
     
  `,

})
export class MeterNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudmi/api/meter-infos?size=2000').map( res => res.json()).subscribe(
            data =>{this.meterInfos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
       // let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        let i = this.name.nativeElement.selectedIndex;
        this.cell.getRow().getCells()[0].newValue = this.meterInfos[i].meterCode;
        this.cell.newValue = this.sure
    }
}
