import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {ArcService} from "../arc.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {RuleNameEditorComponent} from "./rule-name-editor.component";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './meter-category-rule.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MeterCategoryRuleComponent {

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
        meterCategoryCode: {
        title: '设备分类编码',
            type: 'html',
      },
        meterCategoryName: {
            title: '设备分类名称',
            type: 'html',
        },
        ruleCode: {
            title: '规则编码',
        },
        ruleName: {
        title: '规则名称',
            editor:{
                type:'custom',
                component: RuleNameEditorComponent,
            }
      },
        analysis: {
            title: '分析器名',

        },

    },
  };

    source: ServerDataSource;

    constructor(private service: ArcService,
                private http:Http,
                private dateUtils: JhiDateUtils) {
        this.source = new ServerDataSource(http, { endPoint: '/emcloudarc/api/meter-category-rules' },
            dateUtils);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterCategoryRule(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterCategoryRule(event.newData).subscribe((response) => {
                this.service.getDataMeterCategoryRule().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterCategoryRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
