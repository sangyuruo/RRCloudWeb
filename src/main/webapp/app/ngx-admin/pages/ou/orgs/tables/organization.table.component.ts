import { Component } from '@angular/core';
import {ServerDataSource} from "../../../../ng2-smart-table/lib/data-source/server/server.data-source";

import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {OuService} from "../../ou.service";

@Component({
    selector: 'ngx-orgs-table',
    templateUrl: './organization.table.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class OrganizationTableComponent {

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
            /*id: {
              title: 'ID',
              type: 'number',
            },
            firstName: {
              title: 'First Name',
              type: 'string',
            },
            lastName: {
              title: 'Last Name',
              type: 'string',
            },
            username: {
              title: 'Username',
              type: 'string',
            },
            email: {
              title: 'E-mail',
              type: 'string',
            },
            age: {
              title: 'Age',
              type: 'number',
            },*/
            orgCode: {
                title: '组织代码',
                type: 'number',
            },
            orgName: {
                title: '组织名称',
                type: 'number',
            },
            companyCode: {
                title: '公司代码',
                type: 'html',
            },
            companyName: {
                title: '公司名称',
                type: 'html',
            },
            parentOrgName: {
                title: '父组织名称',
                type: 'number',
            },
            addressName: {
                title: '地址名称',
                type: 'html',
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
