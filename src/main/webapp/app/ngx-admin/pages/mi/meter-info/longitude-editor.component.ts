import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
declare let $:any;
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
    template: `        
        <input class="form-control" type="text" (click)=" getMap()" [(ngModel)]="longitude" />
  `,

})
export class LongitudeEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;
    meterInfos;
    sure ;
    longitude;
    constructor(private http: Http,
                private router: Router,
                private routerInfo:ActivatedRoute
    ) {
        super();
    }
    ngAfterViewInit() {
        //路由传输参数
        this.routerInfo.queryParams.subscribe((queryParams)=>{this.longitude=queryParams['longitude'];
         this.cell.newValue=this.longitude;
        })
    }

    getMap(){
        //跳转路由
        this.router.navigateByUrl('/pages/mi/MibaiduMap')
    }
}
