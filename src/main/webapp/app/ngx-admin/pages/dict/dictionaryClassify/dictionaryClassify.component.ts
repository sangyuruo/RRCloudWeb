import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DictService } from '../dict.service';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './company.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class DictionaryClassifyComponent {

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
        dictCode: {
        title: 'dictCode',
        type: 'number',
      },
        dictClassifyCode: {
        title: 'dictClassifyCode',
        type: 'string',
      },
        dictClassifyValue: {
        title: 'dictClassifyValue',
        type: 'string',
      },
        parentClassifyCode: {
        title: 'parentClassifyCode',
        type: 'string',
      },
        seqNo: {
        title: 'seqNo',
        type: 'string',
      },
        enable: {
        title: 'enable',
        type: 'number',
      },
        remark: {
            title: 'remark',
            type: 'number',
        },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: DictService,
               private http:Http,
               private eventManager:JhiEventManager) {
   this.service.getDataDictionaryClassify().subscribe(data =>(this.source.load(data)));
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
        this.service.deleteDictionaryClassify(event.data.id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'dictionaryclassifyListModification',
                content: 'Deleted an dictionaryclassify'
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
            this.service.updateDictionaryClassify(event.newData).subscribe((response)=>{
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
            this.service.updateDictionaryClassify(event.newData).subscribe((response)=>{
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
