import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {ArcService} from "../arc.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
import {RuleCodeEditorComponent} from "../rule-attributes/rule-code-editor.component";
import {RuleNameEditorComponent} from "./rule-name-editor.component";
import {MiMeterCodeEditorComponent} from "./meter-code-editor.component";
import {MeterNameEditorComponent} from "./meter-name-editor.component";

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './meter-rule.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class MeterRuleComponent {

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
        meterCode: {
        title: '设备编码',
            type: 'html',
            editor:{
                type:'custom',
                component: MiMeterCodeEditorComponent,
            }
      },
        meterName: {
            title: '设备名称',
            type: 'html',
            editor:{
                type:'custom',
                component: MeterNameEditorComponent,
            }
        },
        ruleCode: {
            title: '规则编码',
            type: 'html',
            editor:{
                type:'custom',
                component: RuleCodeEditorComponent,
            }
        },
        ruleName: {
        title: '规则名称',
            type: 'html',
            editor:{
                type:'custom',
                component: RuleNameEditorComponent,
            }
      },
        enable: {
            title: '是否有效',
            editor:{
                type:'list',
                config:{
                    selectText:'Select...',
                    list:[
                        { value: true, title:'true'},
                        { value: false, title:'false'},

                    ],
                }
            }
        },
    },
  };

  // source: LocalDataSource = new LocalDataSource();
    source: ServerDataSource;
    constructor(private service: ArcService,
                private http:Http,
                private eventManager:JhiEventManager) {
        // this.service.getDataMeterRule().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudarc/api/meter-rules' });
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteMeterRule(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }

    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateMeterRule(event.newData).subscribe((response) => {
                this.service.getDataMeterRule().subscribe(data => (this.source.load(data)))
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createMeterRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
