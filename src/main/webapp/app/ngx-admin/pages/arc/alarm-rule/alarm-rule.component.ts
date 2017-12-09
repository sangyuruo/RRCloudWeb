import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {Http} from "@angular/http";
import {JhiEventManager} from "ng-jhipster";
import {ArcService} from "../arc.service";

@Component({
    selector: 'ngx-smart-table',
    templateUrl: './alarm-rule.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponentAlarmRule {

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
            id: {
                title: 'ID',
                type: 'number',
            },
            ruleName: {
                title: '规则名称',
                type: 'string',
            },
            ruleCode: {
                title: '规则编码',
                type: 'string',
            },
            ruleType: {
                title: '规则类型',
                type: 'string',
            },
            alarmLevel: {
                title: '紧急度',
                type: 'Integer',
            },
            enable: {
                title: '是否有效',
                type: 'string',
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(private service: ArcService,
                private http:Http,
                private eventManager:JhiEventManager) {
        this.service.getDataAlarmRule().subscribe(data => (this.source.load(data)))
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteAlarmRule(event.data.id).subscribe((response) => {
                this.eventManager.broadcast({
                    name: 'AlarmRuleListModification',
                    content: 'Deleted an AlarmRule'
                });
            });
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateAlarmRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            this.service.createAlarmRule(event.newData).subscribe((response) => {
                event.confirm.resolve(response)
                console.log(response)
            });
        } else {
            event.confirm.reject();
        }
    }
}
