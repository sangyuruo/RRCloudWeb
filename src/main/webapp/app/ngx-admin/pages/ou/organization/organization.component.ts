import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {OuService} from "../ou.service";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './organization.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class Organizationtable {

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
                title: 'orgCode',
                type: 'number',
            },
            orgName: {
                title: 'orgName',
                type: 'number',
            },
            companyCode: {
                title: 'companyCode',
                type: 'number',
            },
            companyName: {
                title: 'companyName',
                type: 'number',
            },
            parentOrgName: {
                title: 'parentOrgName',
                type: 'number',
            },
            addressName: {
                title: 'addressName',
                type: 'number',
            },
            enable: {
                title:'enable',
                type: 'Boolean',
            }
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: OuService,
                private  http  : Http,
                private  eventManager: JhiEventManager
    ) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        this.service.getOrganization().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {

        if (window.confirm('你敢删老子吗?')) {
            this.service.deleteOrganization(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event){

        if (window.confirm('新增吗?')) {
            this.service.saveOrganization(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event){

        if (window.confirm('修改吗?')) {
            this.service.updateOrganization(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }

}
