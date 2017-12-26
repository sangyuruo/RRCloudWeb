import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {MiMeterCodeEditorComponent} from "./meter-code-editor.component";
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './meter-status.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MeterStatusComponent {

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
                type: 'html',
                editor:{
                    type:'custom',
                    component: MiMeterCodeEditorComponent,
                }
            },
            trafficStatus: {
                title: '通讯状态',
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

    // source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;
    constructor(private service: MiService,
                private http:Http,
                private dateUtils: JhiDateUtils) {
        // this.service.getDataMeterStatus().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudmi/api/meter-statuses' },
            dateUtils);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterStatus(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterStatus(event.newData).subscribe((response) => {
                this.service.getDataMeterStatus().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterStatus(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
