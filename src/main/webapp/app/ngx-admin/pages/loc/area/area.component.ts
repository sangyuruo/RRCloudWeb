import {Component} from '@angular/core';
import {LocService} from '../loc.service';
import {ServerDataSource} from '../../../ng2-smart-table/lib/data-source/server/server.data-source';

import {Http} from '@angular/http';

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

        pager: {
            perPage: 15,
        },
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

    // source: LocalDataSource = new LocalDataSource();

    source: ServerDataSource;

    constructor(private service: LocService, private http: Http) {
        //this.service.getDataArea().subscribe(data =>(this.source.load(data)))
        //  this.source.setPaging(1,5,true);
        this.source = new ServerDataSource(http, {endPoint: '/emcloudloc/api/areas'});
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
