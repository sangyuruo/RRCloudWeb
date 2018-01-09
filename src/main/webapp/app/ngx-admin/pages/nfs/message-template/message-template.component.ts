import { Component } from '@angular/core';
import { NfsService } from '../nfs.service';
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {Http} from "@angular/http";
import {JhiDateUtils} from "ng-jhipster";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './message-template.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MessageTemplateComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate : true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave : true,

    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      // id: {
      //   title: 'ID',
      //   type: 'number',
      // },
      // firstName: {
      //   title: 'First Name',
      //   type: 'string',
      // },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      // username: {
      //   title: 'Username',
      //   type: 'string',
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string',
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
        mtCode: {
            title: '消息代码',
            type: 'number',
        },
        content: {
            title: '内容',
            type: 'number',
        },
        paramFlag: {
            title: '是否包含参数',
            editor: {
                type: 'list',
                config: {
                    selectText: 'Select...',
                    list: [
                        {value: true, title: '包含'},
                        {value: false, title: '不包含'}
                    ]
                }
            },
        },
        type: {
            title: '消息类型',
            editor: {
                type: 'list',
                config: {
                    selectText: 'Select...',
                    list: [
                        {value: 1, title: '短信'},
                        {value: 2, title: '邮件'},
                        {value: 3, title: 'app通知'}
                    ]
                }
            },
        },
        enable: {
            title: '是否有效',
            editor: {
                type: 'list',
                config: {
                    selectText: 'Select...',
                    list: [
                        {value: true, title: 'true'},
                        {value: false, title: 'false'}
                    ]
                }
            },
        },

    },
  };

    source: ServerDataSource;

  // constructor(private service: SmartTableService) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

    constructor(private service: NfsService,
                private http:Http,
                private dateUtils: JhiDateUtils    ) {
        this.source = new ServerDataSource(http, {endPoint: '/emcloudnfs/api/message-templates'},
            dateUtils);
    }


    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMessageTemplate(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
  }

    onCreateConfirm(event){
        if (window.confirm('Are you sure you want to save?')) {
            this.service.saveMessageTemplate(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event){
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMessageTemplate(event.newData).subscribe((response) => {
                this.service.getMessageTemplate().subscribe(data=>(this.source.load(data)))
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
}
