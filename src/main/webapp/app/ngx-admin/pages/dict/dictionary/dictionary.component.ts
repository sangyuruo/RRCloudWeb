import {Component} from '@angular/core';

import {DictService} from '../dict.service';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {nextTick} from "q";
import {ServerDataSource} from '../../../ng2-smart-table/lib/data-source/server/server.data-source';


@Component({
    selector: 'ngx-smart-table',
    templateUrl: './dictionary.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class DictionaryComponent {

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
            dictName: {
                title: '字典名称',
                type: 'number',
            },
            dictCode: {
                title: '字典代码',
                type: 'number',
            },
            startTime: {
                title: '开始时间',
                type: 'number',
            },
            endTime: {
                title: '结束时间',
                type: 'number',
            },
            seqNo: {
                title: '序号',
                type: 'number',
            },
        }
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: DictService,
                private http: Http,
                private dateUtils: JhiDateUtils) {

        //  this.service.getDataDictionary().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, {endPoint: '/emclouddict/api/dictionaries'},
            dateUtils);
    }
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteDictionary(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }



    onSaveConfirm(event) {
        if (window.confirm("Are you sure you want to save?")) {
            this.service.updateDictionary(event.newData).subscribe((response) => {
                this.service.getDataDictionary().subscribe(data => (this.source.load(data)))
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
            this.service.createDictionary(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            })
        }
        else {
            event.confirm.reject();
        }
    }

}
