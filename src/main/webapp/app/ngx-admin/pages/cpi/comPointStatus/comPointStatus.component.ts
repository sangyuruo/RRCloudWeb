import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CpiService } from '../cpi.service';
import {JhiEventManager} from "ng-jhipster";
import {Http} from "@angular/http";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './comPointStatus.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class comPointStatusComponent {

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
        communicationStatus: {
            title: '通讯状态',
            type: 'number',
        },
        recordTime: {
            title: '记录时间',
            type: 'number',
        },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CpiService,
              private http:Http,
              private eventManager:JhiEventManager) {
   /* const data = this.service.getData();
    this.source.load(data);*/
   this.service.getDataComPointStatus().subscribe(data =>(this.source.load(data)));
  }

  onDeleteConfirm(event): void
  {
      if (window.confirm('Are you sure you want to delete?'))
      {

          this.service.deleteComPointStatus(event.data.id).subscribe((response) => {
              this.eventManager.broadcast({
                  name: 'compointstatusListModification',
                  content: 'Deleted an compointstatus'
              });
          });
          event.confirm.resolve();
      }
      else
      {
          event.confirm.reject();
      }
  }


    onSaveConfirm(event)
    {
        if (window.confirm('Are you sure you want to save?')) {
            this.service.updateComPointStatus(event.newData).subscribe((response) => {
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
            this.service.createComPointStatus(event.newData).subscribe((response) => {
                event.confirm.resolve()
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
