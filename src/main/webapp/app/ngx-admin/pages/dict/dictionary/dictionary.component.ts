import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {nextTick} from "q";

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
                title: 'id',
                type: 'number',
            },
            dictName: {
                title: 'dictName',
                type: 'number',
            },
            dictCode: {
                title: 'dictCode',
                type: 'number',
            },
            startTime: {
                title: 'startTime',
                type: 'number',
            },
            endTime: {
                title: 'endTime',
                type: 'number',
            },
            seqNo: {
                title: 'seqNo',
                type: 'number',
            },
        }
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: SmartTableService,
                private http:Http,
                private eventManager:JhiEventManager) {

        this.service.getDataDictionary().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteDictionary(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'dictionaryListModification',
                    content: 'Deleted an dictionary'
                });
                event.confirm.resolve();
            });
        } else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event){
        if(window.confirm("Are you sure you want to save?"))
        {
            this.service.updateDictionary(event.newData).subscribe((response)=>{
                event.confirm.resolve(response)
                console.log(response)
            })
        }
        else
        {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event)
    {
        if(window.confirm('Are you sure you want to create?'))
        {
            this.service.updateDictionary(event.newData).subscribe((response)=>{
                event.confirm.resolve(response)
                console.log(response)
            })
        }
        else
        {
            event.confirm.reject();
        }
    }

}
