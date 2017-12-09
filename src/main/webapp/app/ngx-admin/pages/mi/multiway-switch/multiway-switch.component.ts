import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './multiway-switch.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent5 {

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
            meterCode: {
                title: '设备编码',
                type: 'String',
            },
            switchCode: {
                title: '开关序号',
                type: 'Integer',
            },
            switchStatus: {
                title: '开关状态',
                type: 'Integer',
            },
            recordTime: {
                title: '记录时间',
                type: 'Instant',
            },

        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: MiService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataMultiwaySwitch().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMultiwaySwitch(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'MultiwaySwitchListModification',
                    content: 'Deleted a MultiwaySwitch'
                });
            });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMultiwaySwitch(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMultiwaySwitch(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
