import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './arc-routing.module';
import {ArcService} from "./arc.service";
import {RuleCodeEditorComponent} from "./rule-attributes/rule-code-editor.component";
import {MeterNameEditorComponent} from "./meter-rule/meter-name-editor.component";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {McrRuleNameEditorComponent} from "./meter-category-rule/rule-name-editor.component";
import {MeterCategoryNameEditorComponent} from "./meter-category-rule/meter-category-name-editor.component";
import {RuleNameEditorComponent} from "./rule-attributes/rule-name-editor.component";




@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    ...routedComponents,
      MeterNameEditorComponent,
      RuleCodeEditorComponent,
      RuleNameEditorComponent,
      McrRuleNameEditorComponent,
      MeterCategoryNameEditorComponent

  ],
    entryComponents:[
        MeterNameEditorComponent,
        RuleCodeEditorComponent,
        RuleNameEditorComponent,
        McrRuleNameEditorComponent,
        MeterCategoryNameEditorComponent
    ],
  providers: [
      ArcService,
  ],
})
export class arcTablesModule { }
