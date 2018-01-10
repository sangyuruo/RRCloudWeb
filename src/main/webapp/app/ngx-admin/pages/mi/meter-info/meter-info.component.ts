import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {CompanyCodeEditorComponent} from "./company-code-editor.component";
import {OrganizationCodeEditorComponent} from "./organization-code-editor.component";
import {ComPointCodeEditorComponent} from "./com-point-code-editor.component";
import {AddressCodeEditorComponent} from "./address-code-editor.component";
import {MeterTypeEditorComponent} from "./meter-type-editor.component";
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
                type: 'html',
                 editor:{
                     type:'custom',
                     component: AddressCodeEditorComponent,
                 }
            },
            organizationCode: {
                title: '组织编码',
                type: 'html',
                editor:{
                    type:'custom',
                    component: OrganizationCodeEditorComponent,
                }
            },
            companyCode: {
                title: '公司编码',
                type: 'html',
                 editor:{
                     type:'custom',
                     component: CompanyCodeEditorComponent,
                 }
            },
            comPointCode: {
                title: '串口编码',
                type: 'html',
                  editor:{
                      type:'custom',
                      component: ComPointCodeEditorComponent,
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
        },
    };

    //source: LocalDataSource = new LocalDataSource();

    source: ServerDataSource;

    constructor(private service: MiService,
                private http:Http,
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
            this.service.updateMeterInfo(event.newData).subscribe((response) => {
                this.service.getDataMeterInfo().subscribe(data => (this.source.load(data)))
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
