import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { NfsService } from '../nfs.service';

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
            type: 'number',
        },
        type: {
            title: '消息类型',
            type: 'number',
        },
        enable: {
            title: '是否可用',
            type: 'boolean',
        },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableService) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

    constructor(private service: NfsService) {
        /* const data = this.service.getData();
         this.source.load(data);*/
        this.service.getMessageTemplate().subscribe(data => (this.source.load(data)))
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
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
}
