import {Component} from '@angular/core';

import {CpiService} from '../cpi.service';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from 'ng-jhipster';

import {AddressCodeEditorComponent} from "./addresscode-editor.components";
import {CompanyNameEditorComponent} from './companyname-editor.components';
import {CompanyCodeEditorComponent} from './companycode-editor.components';
import {DictNameEditorComponent} from './dict-name-editor.component';
import {OrgCodeEditorComponent} from "./orgcode-editor.components";
import {OrgNameEditorComponent} from "./orgname-editor.components";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {ApiService} from "../../../app.service";
import {AddressNameEditorComponent} from "./addressname-editor.components";
import {regNameEditorComponent} from "./regname-editor.components";


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
            //1
            comPointCode: {
                title: '设备编码',
                type: 'number',
            },
            //2
            registerCode: {
                title: '登记代码',
                type: 'number',
            },
            //3
            registerName: {
                title: '登记名称',
                type: 'number',
                // editor: {
                //     type: 'custom',
                //     component: regNameEditorComponent,
                // },

            },
            //4
            addressCode: {
                title: '地址代码',
                type: 'html',
                // editor: {
                //     type: 'custom',
                //     component: AddressCodeEditorComponent,
                // }
            },
            //5
            addressName: {
                title: '地址名称',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: AddressNameEditorComponent,
                }

            },
            //6
            organizationCode: {
                title: '组织编码',
                type: 'html',
                // editor: {
                //     type: 'custom',
                //     component: OrgCodeEditorComponent,
                // }
            },
            //7
            organizationName: {
                title: '组织名称',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: OrgNameEditorComponent,
                }
            },
            //8
            companyCode: {
                title: '公司编码',
                type: 'html',
                // editor: {
                //     type: 'custom',
                //     component: CompanyCodeEditorComponent,
                // }
            },

            //9
            companyName: {
                title: '公司名称',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CompanyNameEditorComponent,
                }
            },

            //10
            ip: {
                title: 'ip地址',
                type: 'number',
            },
            //11
            hostName: {
                title: '服务器名称',
                type: 'number',
            },
            //12
            hostPort: {
                title: '服务器端口',
                type: 'number',
            },
            //13
            requestTimeout: {
                title: '请求超时时间',
                type: 'number',
            },
            //14
            replyTimeout: {
                title: '响应超时时间',
                type: 'number',
            },
            //15
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
            //16
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
            //17
            connectMode: {
                title: '链接模式',
                type: 'html',
                // editor:{
                //     type:'list',
                //     config:{
                //         selectText:'Select...',
                //         list:[],
                //     }
                // }
            },

            //18
            dictClassifyValue: {
                title: '链接模式名称',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: DictNameEditorComponent,
                }
            },
        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    compoints :any;
    addresses :any;
    constructor(private service: CpiService,
                private http: Http,
                private dateUtils: JhiDateUtils,
                private apiService:ApiService) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        //this.service.getDataComPoint().subscribe(data => (this.source.load(data)));
        this.source = new ServerDataSource(http, {endPoint:'/emcloudcpi/api/compoints'},
            dateUtils);
        this.compoints = this.apiService.getCompoints();
        // if(this.compoints && this.compoints.length)
        // {
        //     for(let i = 0;i <this.compoints.length;i++)
        //     {
        //         this.settings.columns.connectMode.editor.config.list.push(
        //             {value:this.compoints[i].connectMode,title:this.compoints[i].connectMode}
        //         )
        //     }
        // }



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
