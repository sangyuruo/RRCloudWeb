import {Component} from '@angular/core';

import {CpiService} from '../cpi.service';
import {Http} from "@angular/http";
import {JhiEventManager} from 'ng-jhipster';

import {AddressCodeEditorComponent} from "./addresscode-editor.components";
import {CompanyCodeEditorComponent} from './companycode-editor.components';
import {OrgCodeEditorComponent} from "./orgcode-editor.components";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";


@Component({
    selector: 'ngx-smart-table',
    templateUrl: './com-point.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class ComPointComponent {

    settings = {
        add: {
            pager: {
                perPage: 15,
            },

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
                title: '地址代码',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: AddressCodeEditorComponent,
                }
            },
            organizationCode: {
                title: '组织编码',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CompanyCodeEditorComponent,
                }
            },
            companyCode: {
                title: '公司编码',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: OrgCodeEditorComponent,
                }
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
            keepAlive: {
                title: '是否心跳',
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
            connectMode: {
                title: '链接模式',
                type: 'number',
            },
        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: CpiService,
                private http: Http,
                private eventManager: JhiEventManager) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        //this.service.getDataComPoint().subscribe(data => (this.source.load(data)));
        this.source = new ServerDataSource(http, {endPoint: '/emcloudcpi/api/compoints'});
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteComPoint(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }


    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            this.service.updateComPoint(event.newData).subscribe((response) => {
                this.service.getDataComPoint().subscribe(data => (this.source.load(data)));
                event.confirm.resolve()
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
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
