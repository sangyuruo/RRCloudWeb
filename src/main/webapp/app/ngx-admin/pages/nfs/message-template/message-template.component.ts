import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NfsService } from '../nfs.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './company.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MessageTempalte {

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
            title: 'mtCode',
            type: 'number',
        },
        content: {
            title: 'content',
            type: 'number',
        },
        paramFlag: {
            title: 'paramFlag',
            type: 'number',
        },
        type: {
            title: 'type',
            type: 'number',
        },
        enable: {
            title: 'enable',
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
        if (window.confirm('你敢删老子吗?')) {
            this.service.deleteMessageTemplate(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
  }

    onCreateConfirm(event){
        if (window.confirm('新增吗?')) {
            this.service.saveMessageTemplate(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
    onSaveConfirm(event){
        if (window.confirm('修改吗?')) {
            this.service.updateMessageTemplate(event.newData).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            });
        } else {
            event.confirm.reject();
        }
    }
}
