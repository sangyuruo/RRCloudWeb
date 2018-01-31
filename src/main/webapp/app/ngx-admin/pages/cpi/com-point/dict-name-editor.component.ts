import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

declare let $:any;
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let dict of dicts" [value]="dict.dictClassifyValue">{{dict.dictClassifyValue}}</option>
        </select>

    `,

})
export class DictNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    dicts;
    sure ;
    constructor(private http: Http,
                private http1: HttpClient,) {
        super();
        this.http.get('/emclouddict/api/dictionary-classifies/by-dict-code?dictCode=CONNECT_MODE').map(res => res.json()).subscribe(
            data => {
                /*  for(let i=0;i<data.length;i++){
                     if(data[i].dictCode==='METER_TYPE'){
                         this.new.push(data[i]);
                         console.log(data.length);
                     }
                 }*/

                this.dicts = data;
                this.sure = this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}

    setInfo() {
        // let i = $('option:selected').index();
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[15].newValue=this.dicts[i].dictClassifyCode;
        this.cell.newValue = this.sure
    }
}
