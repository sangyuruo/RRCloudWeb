import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";
declare let $:any;
@Component({
    template: `
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let ruleAttributes of ruleAttributess" [value]="ruleAttributes.ruleName">{{ruleAttributes.ruleName}}</option>
        </select>
     
  `,

})
export class RuleNameEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    ruleAttributess;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudarc/api/meter-rules?size=2000').map( res => res.json()).subscribe(
            data =>{this.ruleAttributess = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[0].newValue = this.ruleAttributess[i].ruleCode;
        this.cell.newValue = this.sure
    }
}
