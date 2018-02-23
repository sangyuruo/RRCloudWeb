import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
import {Http} from "@angular/http";
declare let $:any;
@Component({
    template: `
       <!-- <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
            <option *ngFor="let ruleAttributes of ruleAttributess" [value]="ruleAttributes.ruleName">{{ruleAttributes.ruleName}}</option>-->
        <select class="form-control" [(ngModel)]="sure" (ngModelChange)="setInfo()" #name [name]="cell.getId()">
        <option *ngFor="let ruledto of ruledtos" [value]="ruledto.ruleName">{{ruledto.ruleName}}</option>
        <!--<option *ngFor="let r of ruleName" 
                [value]="r">
            {{r}}
        </option>-->

        </select>
  `,
})
export class RuleNameEditorComponent extends DefaultEditor implements AfterViewInit {
    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
     ruledtos;
    //ruleName;
    sure ;
    constructor(private http: Http) {
        super();
        this.http.get('/emcloudarc/api/meter-rules/test').map( res => res.json()).subscribe(
            data =>{this.ruledtos = data;
                this.sure=this.cell.newValue
            }
        )
    }
    ngAfterViewInit() {}
    setInfo(){
        let i = $('[ng-reflect-name=' + this.cell.getId() + '] option:selected').index();
        this.cell.getRow().getCells()[0].newValue = this.ruledtos[i].ruleCode;
        this.cell.newValue = this.sure
    }
}
