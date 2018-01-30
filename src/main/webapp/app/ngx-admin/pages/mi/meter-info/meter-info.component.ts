import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {MeterTypeEditorComponent} from "./meter-type-editor.component";
import {HttpClient, HttpParams} from "@angular/common/http";
import {OrganizationNameEditorComponent} from "./organization-name-editor.component";
import {CompanyNameEditorComponent} from "./company-name-editor.component";
import {CpiRegisterNameEditorComponent} from "./cpi-register-name-editor.component";
import {AddressNameEditorComponent} from "./address-name-editor.component";
declare let $:any;
declare let Qrcode:any;

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './meter-info.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
        /*width: 70rem;*/
    }
  `],
})
export class MeterInfoComponent {

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
          /*  meterCode: {
                title: '设备编码',
                type: 'String',
            },*/
            meterName: {
                title: '设备名称',
                type: 'string',
            },
            registerCode: {
                title: '登记编码',
                type: 'Integer',
            },

            addressName: {
                title: '地址名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component: AddressNameEditorComponent,
                }
            },

            organizationName: {
                title: '组织名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component: OrganizationNameEditorComponent,
                }
            },

            companyName: {
                title: '公司名',
                type: 'html',
                editor:{
                    type:'custom',
                    component: CompanyNameEditorComponent,
                }
            },
            comPointCode: {
                title: '串口编码',
                type: 'html',

            },
            cpiRegisterName: {
                title: '串口登记名称',
                type: 'html',
                editor:{
                    type:'custom',
                    component: CpiRegisterNameEditorComponent,
                }
            },
            meterTypeCode: {
                title: '设备分类代码',
                type: 'Integer',
            },
            meterType: {
                title: '设备类型',
                type: 'html',
                editor:{
                    type:'custom',
                    component: MeterTypeEditorComponent,
                }
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
            Hidden:{
                addressCode: {
                    title: '地址编码',
                    type: 'html',
                },

                organizationCode: {
                    title: '组织编码',
                    type: 'html',
                },

            companyCode: {
                title: '公司编码',
                type: 'html',
            },},
        },
    };

    //source: LocalDataSource = new LocalDataSource();

    source: ServerDataSource;

    constructor(private service: MiService,
                private http:Http,
                private http1:HttpClient,
                private dateUtils: JhiDateUtils
    ) {
        // this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, {endPoint: '/emcloudmi/api/meter-infos'},
            dateUtils);


    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterInfo(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }


    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            /* const params= new HttpParams().set('meterType',event.newData.meterType);
             this.http1.get('/emcloudmi/api/meter-category-infos/by-meter-type',{params})
                 .subscribe(data=>{event.newData.meterTypeCode=data[0].meterTypeCode;
                     event.newData.startOffset=data[0].startOffset;
                     event.newData.numberOfRegisters=data[0].numberOfRegisters;
                     event.newData.controlAddress=data[0].controlAddress;*/
            this.service.updateMeterInfo(event.newData).subscribe((response) => {
                this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
            /* });*/
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {

            /* const params= new HttpParams().set('meterType',event.newData.meterType);
            this.http1.get('/emcloudmi/api/meter-category-infos/by-meter-type',{params})
                .subscribe(data=>{event.newData.meterTypeCode=data[0].meterTypeCode;
                    event.newData.startOffset=data[0].startOffset;
                    event.newData.numberOfRegisters=data[0].numberOfRegisters;
                    event.newData.controlAddress=data[0].controlAddress;*/

            this.service.createMeterInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
            /*  });*/
            /*this.service.createMeterInfo(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });*/
        } else {
            event.confirm.reject();
        }
    }
}
