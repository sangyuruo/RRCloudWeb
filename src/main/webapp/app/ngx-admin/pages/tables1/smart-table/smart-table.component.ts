import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import {Http} from "@angular/http";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

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
          /* id: {
               title: 'ID',
               type: 'number',
           },*/
          companyLongName: {
              title: 'Company Long Name',
              type: 'string',
          },
          /*/companyName: {
              title: 'Company Name',
              type: 'string',
          },*/
          parentCompanyName: {
              title: 'Parent CompanyName',
              type: 'string',
          },
          /*companyCode: {
              title: 'Company Code',
              type: 'string',
          },*/
          /*addressCode: {
              title: 'Address Code',
              type: 'number',
          },*/
          addressName: {
              title: 'Address Name',
              type: 'number',
          },
          telephone: {
              title: 'Telephone',
              type: 'number',
          },
          /*legalPerson: {
              title: 'Legal Person',
              type: 'number',
          },*/
          /*parentCompanyCode: {
              title: 'Parent CompanyCode',
              type: 'number',
          },*/
          levelId: {
              title: 'Level Id',
              type: 'number',
          },
          /*remark: {
              title: 'Remark',
              type: 'number',
          },*/
          /*attachsNum: {
              title: 'Attachs Num',
              type: 'number',
          },*/
          /* seqNo: {
               title: 'seq No',
               type: 'number',
           },*/
          /* enable: {
               title: 'Enable',
               type: 'number',
           },*/
          createdBy: {
              title: 'Created By',
              type: 'number',
          },
          /*createTime: {
              title: 'create Time',
              type: 'number',
          },*/
          /*updatedBy: {
              title: 'Updated By',
              type: 'number',
          },*/
          updateTime: {
              title: 'update Time',
              type: 'number',
          },

      },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,
              private http:Http) {
    //const data = this.service.getData();
    //this.source.load(data);
      /*this.http.get('/emcloudou/api/companies')
          .map(res => res.json())
          .subscribe(data => (this.source.load(data)) )*/
      this.service.getData1().subscribe(data => (this.source.load(data)))
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
