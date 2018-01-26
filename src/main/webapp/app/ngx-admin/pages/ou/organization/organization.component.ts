import { Component } from '@angular/core';
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";

import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {OuService} from "../ou.service";
import {AddressNameEditorComponent} from '../company/addressname-editor.components';
import {OrgNameEditorComponent} from "./orgname-editor.components";
import {CpNameEditorComponent} from "./companyname-editor.components";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './organization.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class OrganizationComponent {

    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave : true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {

            companyName: {
                title: '公司名',
                type: 'string',
                editor:{
                    type:'custom',
                    component:CpNameEditorComponent,
                }
            },
            companyCode: {
                title: '公司代码',
                type: 'string',
                // editor:{
                //     type:'custom',
                //     component:CompanyCodeEditorComponent,
                // }
            },
            parentOrgName: {
                title: '父组织名称',
                type: 'string',
                editor:{
                    type:'list',
                    config:{
                        list:[]
                    },
                },
            },
            parentCode: {
                title: '父组织代码',
                type: 'html'
            },

            orgName: {
                title: '组织名称',
                type: 'html',
                // editor:{
                //     type:'custom',
                //     component:OrgNameEditorComponent,
                // }
            },
            orgCode: {
                title: '组织代码',
                type: 'html',

                // editor:{
                //     type:'custom',
                //     component:OrgCodeEditorComponent,
                // }
            },

            addressName: {
                title: '地址名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component:AddressNameEditorComponent,
                }
            },
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
        },
    };

    source: ServerDataSource;

    constructor(private service: OuService,
                private  http  : Http,
                private dateUtils: JhiDateUtils
    ) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        //this.service.getOrganization().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudou/api/organizations' },
            dateUtils);

    }

    onDeleteConfirm(event): void {

        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteOrganization(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event){

        if (window.confirm('Are you sure you want to save?')) {
            this.service.saveOrganization(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event){

        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateOrganization(event.newData).subscribe((response) => {
                this.service.getOrganization().subscribe(data=>(this.source.load(data))),
                    event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }

}
