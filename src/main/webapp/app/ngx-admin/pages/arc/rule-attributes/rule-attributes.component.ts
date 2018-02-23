import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils} from "ng-jhipster";
import {ArcService} from "../arc.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {RuleNameEditorComponent} from "./rule-name-editor.component";


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './rule-attributes.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class RuleAttributesComponent {

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
    columns: {
        ruleCode: {
            title: '规则编码',
            type: 'html',
        },
        ruleName: {
            title: '规则名称',
            type: 'html',
            editor:{
                type:'custom',
                component:  RuleNameEditorComponent,
            }
        },
        alarmLevel: {
            title: '属性名',
            type: 'Integer',
        },
        startValue: {
            title: '起始值',
            type: 'Double',
        },
        endValue: {
            title: '结束值',
            type: 'Double',
        },

    },
  };

    source: ServerDataSource;

    constructor(private service: ArcService,
                private http:Http,
                private dateUtils: JhiDateUtils) {
        this.source = new ServerDataSource(http, { endPoint: '/emcloudarc/api/rule-attributes' },
            dateUtils);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteRuleAttributes(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateRuleAttributes(event.newData).subscribe((response) => {
                this.service.getDataRuleAttributes().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createRuleAttributes(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
