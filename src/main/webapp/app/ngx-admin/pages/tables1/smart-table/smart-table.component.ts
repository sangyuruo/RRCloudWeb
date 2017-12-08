import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableService} from '../../../@core/data/smart-table.service';
import {Http, Headers} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";

import 'rxjs/Rx';
import {Observer, Observable} from "rxjs/Rx"


@Component({
    selector: 'ngx-smart-table',
    templateUrl: './smart-table.component.html',
    styles: [`
        nb-card {
            transform: translate3d(0, 0, 0);
        }
    `],
})
export class SmartTableComponent implements OnInit {

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
        /*columns: {
          id: {
            title: 'ID',
            type: 'number',
          },
          firstName: {
            title: 'First Name',
            type: 'string',
          },
          lastName: {
            title: 'Last Name',
            type: 'string',
          },
          username: {
            title: 'Username',
            type: 'string',
          },
          email: {
            title: 'E-mail',
            type: 'string',
          },
          age: {
            title: 'Age',
            type: 'number',
          },
        },*/
        columns: {
            id: {
                title: 'ID',
                type: 'number',
            },
            /*companyLongName: {
                title: 'Company Long Name',
                type: 'string',
            },*/
            companyName: {
                title: 'Company Name',
                type: 'string',
            },
            parentCompanyName: {
                title: 'Parent CompanyName',
                type: 'string',
            },
            companyCode: {
                title: 'Company Code',
                type: 'string',
            },
            countryCode: {
                title: 'country Code',
                type: 'string',
            },
            cityCode: {
                title: 'city Code',
                type: 'string',
            },
            /*addressCode: {
                title: 'Address Code',
                type: 'number',
            },*/
            addressName: {
                title: 'Address Name',
                type: 'number',
            },
            /*telephone: {
                title: 'Telephone',
                type: 'number',
            },*/
            /*legalPerson: {
                title: 'Legal Person',
                type: 'number',
            },*/
            /*parentCompanyCode: {
                title: 'Parent CompanyCode',
                type: 'number',
            },*/
            /*levelId: {
                title: 'Level Id',
                type: 'number',
            },*/
            /*remark: {
                title: 'Remark',
                type: 'number',
            },*/
            /*attachsNum: {
                title: 'Attachs Num',
                type: 'number',
            },*/
            /*seqNo: {
                title: 'seq No',
                type: 'number',
            },*/
            enable: {
                title: 'Enable',
                type: 'number',
            },
            /*createdBy: {
                title: 'Created By',
                type: 'number',
            },*/
            /*createTime: {
                title: 'create Time',
                type: 'number',
            },*/
            /*updatedBy: {
                title: 'Updated By',
                type: 'number',
            },*?
            /*pdateTime: {
                title: 'update Time',
                type: 'number',
            },*/

        },
    };

    source: LocalDataSource = new LocalDataSource();


    constructor(private service: SmartTableService,
                private http: Http,
                private eventManager: JhiEventManager,) {
        //const data = this.service.getData();
        //this.source.load(data);
        /*this.http.get('/emcloudou/api/companies')
            .map(res => res.json())
            .subscribe(data => (this.source.load(data)) )*/
        //this.service.getData1().subscribe(data => (this.source.load(data)))

    }

    ngOnInit() {
        this.service.getData1().subscribe(data => (this.source.load(data)));


    }

    onDeleteConfirm(event): void {

        console.log(event.data.id)
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.delete(event.data.id).subscribe((response) => {
                event.confirm.resolve(response)
                console.log( response )
            })
        } else {
            event.confirm.reject();
        }
    }


    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            this.service.update(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log( response )
            })
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.create(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log( response )
            })
        } else {
            event.confirm.reject();
        }
    }


}
