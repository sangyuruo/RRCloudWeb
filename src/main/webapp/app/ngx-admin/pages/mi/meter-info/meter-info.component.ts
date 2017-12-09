import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './meter-info.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent2 {

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
                title: '序号',
                type: 'number',
            },
            meterCode: {
                title: '设备编码',
                type: 'String',
            },
            meterName: {
                title: '设备名称',
                type: 'string',
            },
            registerCode: {
                title: '登记编码',
                type: 'Integer',
            },
            addressCode: {
                title: '地址编码',
                type: 'string',
            },
            organizationCode: {
                title: '组织编码',
                type: 'string',
            },
            companyCode: {
                title: '公司编码',
                type: 'String',
            },
            comPointCode: {
                title: '串口编码',
                type: 'String',
            },
            meterType: {
                title: '设备类型',
                type: 'String',
            },
            startOffset: {
                title: '起始偏移',
                type: 'String',
            },
            numberOfRegisters: {
                title: '寄存器数量',
                type: 'String',
            },
            controlAddress: {
                title: '控制地址',
                type: 'String',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: MiService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterInfo(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'MeterInfoListModification',
                    content: 'Deleted a MeterInfo'
                });

            }); event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
