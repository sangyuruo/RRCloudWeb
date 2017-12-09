import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {ResourceService} from "../resource.service";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './resource.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponentResource {

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
            confirmSave: true,
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            resourceCode: {
                title: '资源编号',
                type: 'string',
            },
            resourceName: {
                title: '资源名称',
                type: 'string',
            },
            resourceType: {
                title: '资源类型',
                type: 'string',
            },
            resourceUrl: {
                title: '访问地址',
                type: 'string',
            },
            enable: {
                title: '是否有效',
                type: 'Boolean',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: ResourceService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataResource().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteResource(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'RuleAttributesListModification',
                    content: 'Deleted an RuleAttributes'
                });
            });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateResource(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createResource(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
