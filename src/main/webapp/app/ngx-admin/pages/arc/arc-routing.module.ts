import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArcComponent} from "./arc.component";
import {MeterRuleComponent} from "./meter-rule/meter-rule.component";
import {RuleAttributesComponent} from "./rule-attributes/rule-attributes.component";
import {MeterCategoryRuleComponent} from "./meter-category-rule/meter-category-rule.component";
import {AnalysisEngineComponent} from './analysis-engine/analysis-engine.component';

const routes: Routes = [{
  path: '',
  component: ArcComponent,
  children: [
      {
    path: 'AlarmRule',
    component: AnalysisEngineComponent,
  },
      {
          path: 'RuleAttributes',
          component: RuleAttributesComponent,
      },
      {
          path: 'MeterRule',
          component: MeterRuleComponent,
      },
      {
          path: 'MeterCategoryRule',
          component: MeterCategoryRuleComponent,
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
    AnalysisEngineComponent,
    RuleAttributesComponent,
    MeterRuleComponent,
    MeterCategoryRuleComponent
];
