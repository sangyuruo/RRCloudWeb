import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";

import 'rxjs/Rx';

import {OuService} from "../ou.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {AddressNameEditorComponent} from "./addressname-editor.components";
import {CompanyCodeEditorComponent} from "./companycode-editor.components";
import {CompanyNameEditorComponent} from './companyname-editor.components';
import {CityCodeEditorComponent} from "./citycode-editor.components";
import {AreaNameEditorComponent} from "./areaname-editor.components";
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './company.component.html',
    styles: [`                                                                                                                              
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class CompanyComponent {

    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate : true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },


        columns: {
            /* id: {
                 title: 'ID',
                 type: 'number',
             },*/

            companyName: {
                title: '公司名',
                type: 'string',
                // editor:{
                //     type:'custom',
                //     component:CompanyNameEditorComponent,
                // }
            },

            parentCompanyName: {
                title: '父公司名',
                type: 'string',
                editor:{
                    type:'custom',
                    component:CompanyNameEditorComponent,
                }
            },

            countryCode: {
                title: '国家代码',
                type: 'string',
            },
            cityCode: {
                title: '城市代码',
                type: 'string',
                // editor:{
                //     type:'custom',
                //     component:CityCodeEditorComponent,
                // }
            },
            cityName: {
                title: '城市名称',
                type: 'string',
                editor:{
                    type:'custom',
                    component:AreaNameEditorComponent,
                }
            },

            addressCode: {
                title: '地址代码',
                type: 'number'
            },
            addressName: {
                title: '地址名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component:AddressNameEditorComponent,
                }
            },
            /*legalPerson: {
                title: 'Legal Person',
                type: 'number',
            },*/
            /*parentCompanyCode: {
                title: 'Parent CompanyCode',
                type: 'number',
            },*/
            /*remark: {
                title: 'Remark',
                type: 'number',
            },*/
            /*attachsNum: {
                title: 'Attachs Num',
                type: 'number',
            },*/
            /* seqNo: {
                 title: 'seq No',
                 type: 'number',
             },*/
            enable: {
                title: '是否有效',
                editor: {
                    type: 'list',
                    config: {
                        selectText: 'Select...',
                        list: [
                            {value: true, title: 'true'},
                            {value: false, title: 'false'}
                        ]
                    }
                },
            },

            createTime: {
                title: 'create Time',
                type: 'number',
            },
            /*updatedBy: {
                title: 'Updated By',
                type: 'number',
            },*/
            disable:{
                companyCode: {
                    // title: '公司代码',
                    // type: 'string',
                    // editor:{
                    //     type:'custom',
                    //     component:CompanyCodeEditorComponent,
                    // }
                }
            },

        },
    };

    source: ServerDataSource;
    constructor(private service: OuService,
                private http:Http,
                private dateUtils: JhiDateUtils
    ) {
        //const data = this.service.getData();
        //this.source.load(data);
        /*this.http.get('/emcloudou/api/companies')
            .map(res => res.json())
            .subscribe(data => (this.source.load(data)) )*/
        //this.service.getCompany().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudou/api/companies'},
            dateUtils);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteCompany(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            this.service.saveCompany(event.newData).subscribe((response) =>{
                event.confirm.resolve(response);
                console.log(response);
            });
        }else{
            event.confirm.reject();
        }
    }
    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateCompany(event.newData).subscribe((response) =>{
               this.service.getCompany().subscribe(data=>(this.source.load(data))),
                event.confirm.resolve(response);
                console.log(response);
            });
        }else{
            event.confirm.reject();
        }
    }



}
