import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlarmRuleComponent} from "./alarm-rule/alarm-rule.component";
import {ArcComponent} from "./arc.component";
import {MeterRuleComponent} from "./meter-rule/meter-rule.component";
import {RuleAttributesComponent} from "./rule-attributes/rule-attributes.component";

const routes: Routes = [{
  path: '',
  component: ArcComponent,
  children: [
      {
    path: 'AlarmRule',
    component: AlarmRuleComponent,
  },
      {
          path: 'RuleAttributes',
          component: RuleAttributesComponent,
      },
      {
          path: 'MeterRule',
          component: MeterRuleComponent,
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    ArcComponent,
    AlarmRuleComponent,
    RuleAttributesComponent,
    MeterRuleComponent,
];
