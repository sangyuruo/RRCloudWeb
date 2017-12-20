import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import {Http} from "@angular/http";
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let dictionaryClassify of dictionaryClassifies" [value]="dictionaryClassify.seqNo">{{dictionaryClassify.seqNo}}</option>
        </select>
     
  `,

})
export class seqNoEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    dictionaryClassifies;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emclouddict/api/dictionaries').map( res => res.json()).subscribe(
            data =>{this.dictionaryClassifies = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        this.cell.newValue = this.sure
    }
}
