import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {DictService} from "../dict.service";

import {ServerDataSource} from '../../../ng2-smart-table/lib/data-source/server/server.data-source';
import {DictCodeEditorComponent} from "./dictcode-editor.components";
import {seqNoEditorComponent} from "./seqNo-editor.components";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './dictionary-classify.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DictionaryClassifyComponent {

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
            dictCode: {
                title: '字典代码',
                type: 'html',
                editor:{
                    type:'custom',
                    component:DictCodeEditorComponent,
                }
            },
            dictClassifyCode: {
                title: '分类代码',
                type: 'string',
            },
            dictClassifyValue: {
                title: '分类值',
                type: 'string',
            },
            parentClassifyCode: {
                title: '父分类代码',
                type: 'string',
            },
            seqNo: {
                title: '序号',
                type: 'html',
                editor:{
                    type:'custom',
                    component:seqNoEditorComponent,
                }
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
            remark: {
                title: '备注',
                type: 'number',
            },

        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: DictService,
                private http: Http,
                private dateUtils: JhiDateUtils) {
        //this.service.getDataDictionaryClassify().subscribe(data =>(this.source.load(data)));
        this.source = new ServerDataSource(http, {endPoint: '/emclouddict/api/dictionary-classifies'},
            dateUtils);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteDictionaryClassify(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }



    onSaveConfirm(event) {
        if (window.confirm("Are you sure you want to save?")) {
            this.service.updateDictionaryClassify(event.newData).subscribe((response) => {
                this.service.getDataDictionaryClassify().subscribe(data => (this.source.load(data)));
                event.confirm.resolve(response)
                console.log(response)
            })
        }
        else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createDictionaryClassify(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            })
        }
        else {
            event.confirm.reject();
        }
    }
}
