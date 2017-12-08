import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './arc.component';
import { SmartTableComponentAlarmRule } from './alarm-rule/alarm-rule.component';
import {SmartTableComponentRuleAttributes} from "./rule-attributes/smart-table.component";
import {SmartTableComponentMeterRule} from "./meter-rule/meter-rule.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
      {
    path: 'AlarmRule',
    component: SmartTableComponentAlarmRule,
  },
      {
          path: 'RuleAttributes',
          component: SmartTableComponentRuleAttributes,
      },
      {
          path: 'MeterRule',
          component: SmartTableComponentMeterRule,
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    SmartTableComponentAlarmRule,
    SmartTableComponentRuleAttributes,
    SmartTableComponentMeterRule,
];
