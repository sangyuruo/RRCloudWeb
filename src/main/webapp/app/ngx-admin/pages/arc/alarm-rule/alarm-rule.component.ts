import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {JhiDateUtils, JhiEventManager} from "ng-jhipster";
import {ArcService} from "../arc.service";
import {ServerDataSource} from "../../../ng2-smart-table/lib/data-source/server/server.data-source";
@Component({
    selector: 'ngx-smart-table',
    templateUrl: './alarm-rule.component.html',
    styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AlarmRuleComponent {

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
                private dateUtils: JhiDateUtils
                ) {
        // this.service.getDataAlarmRule().subscribe(data => (this.source.load(data)))
        this.source = new ServerDataSource(http, { endPoint: '/emcloudarc/api/alarm-rules' },
        dateUtils
        );
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            this.service.deleteAlarmRule(event.data.id).subscribe((response) => {
                event.confirm.resolve(response);
                console.log(response);
            })
        } else {
            event.confirm.reject();
        }
    }


    onUpdateConfirm(event) {
        if (window.confirm('Are you sure you want to update?')) {
            this.service.updateAlarmRule(event.newData).subscribe((response) => {
                this.service.getDataAlarmRule().subscribe(data => (this.source.load(data)))
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
