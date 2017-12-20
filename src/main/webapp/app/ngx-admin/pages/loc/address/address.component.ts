import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {LocService} from '../loc.service';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './address.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class AddressComponent {

    settings = {

        pager: {
            parPage: 15,
        },
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
            addressName: {
                title: '地址名称',
                type: 'number',
            },
            addressCode: {
                title: '地址代码',
                type: 'string',
            },
            longitude: {
                title: '经度',
                type: 'string',
            },
            latitude: {
                title: '纬度',
                type: 'string',
            },
            areaCode: {
                title: '地区代码',
                type: 'string',
            },
            enable: {
                title: '是否有效',
                type: 'number',
            },
        },
    };

    //source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;

    constructor(private service: LocService,
                private http: Http,
                private eventManeger: JhiEventManager) {
        /*const data = this.service.getData();
        this.source.load(data);*/
        //this.service.getDataAddress().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, {endPoint: '/emcloudloc/api/addresses'});
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            this.service.deleteAddress(event.data.id).subscribe((response) => {
                this.eventManeger.broadcast({
                    name: 'addressListModification',
                    content: 'Deleted an address'
                });
            });
        }
        else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            this.service.updateAddress(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            })
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createAddress(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            })
        } else {
            event.confirm.reject();
        }
    }
}
