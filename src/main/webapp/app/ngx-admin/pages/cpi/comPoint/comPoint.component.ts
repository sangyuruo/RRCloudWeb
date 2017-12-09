import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {CpiService} from '../cpi.service';
import {Http} from "@angular/http";
import {JhiEventManager} from 'ng-jhipster';

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './comPoint.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class ComPointComponent {

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
            comPointCode: {
                title: '设备编码',
                type: 'number',
            },
            registerCode: {
                title: '登记代码',
                type: 'number',
            },
            registerName: {
                title: '登记名称',
                type: 'number',
            },
            addressCode: {
                title: '地址编码',
                type: 'number',
            },
             organizationCode: {
                 title: '组织编码',
                 type: 'number',
             },
             companyCode: {
                 title: '公司编码',
                 type: 'number',
             },
            ip: {
                title: 'ip地址',
                type: 'number',
            },
            hostName: {
                title: '服务器名称',
                type: 'number',
            },
            hostPort: {
                title: '服务器端口',
                type: 'number',
            },
            requestTimeout: {
                title: '请求超时时间',
                type: 'number',
            },
            replyTimeout: {
                title: '响应超时时间',
                type: 'number',
            },
            enable: {
                title: '是否有效',
                type: 'number',
            },
            keepAlive: {
                title: '是否心跳',
                type: 'number',
            },
            connectMode: {
                title: '链接模式',
                type: 'number',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: CpiService,
                private http: Http,
                private eventManager: JhiEventManager) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        this.service.getDataComPoint().subscribe(data => (this.source.load(data)));
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteComPoint(event.data.id).subscribe((response) => {
                event.confirm.resolve()
                console.log(event.data.id)
            });
        } else {
            event.confirm.reject();
        }
    }

        onSaveConfirm(event)
        {
            if (window.confirm('Are you sure you want to save?')) {
                this.service.updateComPoint(event.newData).subscribe((response) => {
                    event.confirm.resolve()
                    console.log(response)
                });
            } else {
                event.confirm.reject();
            }
        }

        onCreateConfirm(event)
        {
            if (window.confirm('Are you sure you want to save?')) {
                this.service.createComPoint(event.newData).subscribe((response) => {
                    event.confirm.resolve()
                    console.log(response)
                });
            } else {
                event.confirm.reject();
            }
        }
    }
