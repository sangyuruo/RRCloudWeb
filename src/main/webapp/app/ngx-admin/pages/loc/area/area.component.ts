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
        areaCode: {
        title: '地区代码',
        type: 'number',
      },
        areaName: {
        title: '地区名称',
        type: 'string',
      },
        zipCode: {
        title: '邮政编码',
        type: 'string',
      },
        parentId: {
        title: '父地址编码',
        type: 'string',
      },
        parentName: {
        title: '父地址名称',
        type: 'string',
      },
        depth: {
        title: '深度',
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
