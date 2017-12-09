import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { CpiService } from '../cpi.service';
import {Http} from "@angular/http";
import {JhiEventManager} from 'ng-jhipster';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './comPoint.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ComPointComponent {

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
        registerCode: {
            title: 'registerCode',
            type: 'number',
        },
        registerName: {
            title: 'registerName',
            type: 'number',
        },
        addressCode: {
            title: 'addressCode',
            type: 'number',
        },
       /* organizationCode: {
            title: 'organizationCode',
            type: 'number',
        },
        companyCode: {
            title: 'companyCode',
            type: 'number',
        },*/
        ip: {
            title: 'ip',
            type: 'number',
        },
        hostName: {
            title: 'hostName',
            type: 'number',
        },
        hostPort: {
            title: 'hostPort',
            type: 'number',
        },
        requestTimeout: {
            title: 'requestTimeout',
            type: 'number',
        },
        replyTimeout: {
            title: 'replyTimeout',
            type: 'number',
        },
        enable: {
            title: 'enable',
            type: 'number',
        },
        keepAlive: {
            title: 'keepAlive',
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
   this.service.getDataComPoint().subscribe(data =>(this.source.load(data)));
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(event.data.id);
        this.service.deleteComPoint(event.data.id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'compointListModification',
                content: 'Deleted an compoint'
            });
        });
    } else {
      event.confirm.reject();
    }
  }
}
