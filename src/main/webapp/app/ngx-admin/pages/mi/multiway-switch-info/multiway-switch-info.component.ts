import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './multiway-switch-info.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent4 {

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
                title: 'id',
                type: 'Integer',
            },
            meterCode: {
                title: '设备编码',
                type: 'String',
            },
            switchCode: {
                title: '开关序号',
                type: 'Integer',
            },
            createdBy: {
                title: '创建人',
                type: 'String',
            },
            createTime: {
                title: '创建时间',
                type: 'Instant',
            },
            updatedBy: {
                title: '修改人',
                type: 'String',
            },
            updateTime: {
                title: '修改时间',
                type: 'Instant',
            },
            controlCommands: {
                title: '下发命令',
                type: 'String',
            },

        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: MiService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataMultiwaySwitchInfo().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMultiwaySwitchInfo(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'MultiwaySwitchInfoListModification',
                    content: 'Deleted a MultiwaySwitchInfo'
                });
            });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMultiwaySwitchInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMultiwaySwitchInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
