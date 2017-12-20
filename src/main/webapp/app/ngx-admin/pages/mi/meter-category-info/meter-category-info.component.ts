import { Component } from '@angular/core';
import {LocalDataSource,} from 'ng2-smart-table';

import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {MeterNameEditorComponent} from "./meter-name-editor.component";
import {MeterTypeEditorComponent} from "./meter-type-editor.component";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './meter-category-info.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MeterCategoryInfoComponent {

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
            meterName: {
                title: '设备名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component: MeterNameEditorComponent,
                }
            },
            meterType: {
                title: '设备类型',
                type: 'html',
                editor:{
                    type:'custom',
                    component: MeterTypeEditorComponent,
                }
            },
            meterFactory: {
                title: '设备生产厂家',
                type: 'string',
            },
            tel: {
                title: '联系方式',
                type: 'Integer',
            },
            startOffset: {
                title: '起始偏移',
                type: 'Integer',
            },
            numberOfRegisters: {
                title: '寄存器数量',
                type: 'Integer',
            },
            controlAddress: {
                title: '控制地址',
                type: 'Integer',
            },
        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: MiService,
                private http:Http,
                private eventManager:JhiEventManager) {
        //this.service.getDataMeterCategoryInfo().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudmi/api/meter-category-infos' });
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterCategoryInfo(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterCategoryInfo(event.newData).subscribe((response) => {
                this.service.getDataMeterCategoryInfo().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterCategoryInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    paginate(page){
        alert('hi')
    }
}
