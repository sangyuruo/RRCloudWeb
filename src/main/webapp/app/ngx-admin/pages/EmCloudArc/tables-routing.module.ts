import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponentAlarmRule } from './AlarmRule/smart-table.component';
import {SmartTableComponentRuleAttributes} from "./RuleAttributes/smart-table.component";
import {SmartTableComponentMeterRule} from "./MeterRule/smart-table.component";

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
