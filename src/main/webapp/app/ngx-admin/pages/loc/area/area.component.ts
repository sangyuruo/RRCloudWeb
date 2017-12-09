import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { LocService } from '../loc.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './area.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AreaComponent {

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
        id: {
            title: 'id',
            type: 'number',
        },
        areaCode: {
        title: 'areaCode',
        type: 'number',
      },
        areaName: {
        title: 'areaName',
        type: 'string',
      },
        zipCode: {
        title: 'zipCode',
        type: 'string',
      },
        parentId: {
        title: 'parentId',
        type: 'string',
      },
        parentName: {
        title: 'parentName',
        type: 'string',
      },
        depth: {
        title: 'depth',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: LocService) {
    this.service.getDataArea().subscribe(data =>(this.source.load(data)))
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
