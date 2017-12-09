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
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

        comPointCode: {
            title: 'comPointCode',
            type: 'number',
        },
        communicationStatus: {
            title: 'communicationStatus',
            type: 'number',
        },
        recordTime: {
            title: 'recordTime',
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
}
