import { Component } from '@angular/core';

import {Http} from "@angular/http";
import {JhiDateUtils} from "ng-jhipster";
import {MiService} from "../mi.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {DictClassifyValueEditorComponent} from "./dict-classify-value-editor.component";
import {HttpClient, HttpParams} from "@angular/common/http";

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
            meterTypeCode: {
                title: '设备分类代码',
                type: 'Integer',
            },
            meterType: {
                title: '设备分类',
                type: 'html',
            },
            dictCode: {
                title: '设备大类代码',

            },
            dictName: {
                title: '设备大类名称',
                editor:{
                    type:'custom',
                    component: DictClassifyValueEditorComponent,
                }
            },
            functionCode: {
                title: '功能码',
                type: 'Integer',
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
            /* createTime: {
                 title: 'create Time',
                 type: 'number',
             },*/
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
        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: MiService,
                private http:Http,
                private http1:HttpClient,
                private dateUtils: JhiDateUtils) {
        //this.service.getDataMeterCategoryInfo().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudmi/api/meter-category-infos' },
            dateUtils);
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
           /*   const params= new HttpParams().set('dictClassifyValue',event.newData.dictName);
              this.http1.get('emclouddict/api/dictionary-classifies/by-dict-classify-value',{params})
                  .subscribe(data=>{event.newData.dictCode=data[0].dictClassifyCode;
            this.service.updateMeterCategoryInfo(event.newData).subscribe((response) => {
                this.service.getDataMeterCategoryInfo().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
              });*/


            /* if(event.newData.dictName === "水表"){
                 event.newData.dictCode = 1
             }else if(event.newData.dictName === "电表"){
                 event.newData.dictCode = 2
             }else{
                 event.newData.dictCode = 3
             }*/
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

          /*  const params= new HttpParams().set('dictClassifyValue',event.newData.dictName);
            this.http1.get('emclouddict/api/dictionary-classifies/by-dict-classify-value',{params})
                .subscribe(data=>{event.newData.dictCode=data[0].dictClassifyCode;*/

                    this.service.createMeterCategoryInfo(event.newData).subscribe((response) => {
                        event.confirm.resolve(response)
                        console.log(response)
                    });
          /*      });*/
            /*
                        this.service.createMeterCategoryInfo(event.newData).subscribe((response) => {
                            event.confirm.resolve(response)
                            console.log(response)
                        });*/
        } else {
            event.confirm.reject();
        }
    }
    /*paginate(page){
        alert('hi')
    }*/
}
