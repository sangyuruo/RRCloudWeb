import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './arc-routing.module';
import {ArcService} from "./arc.service";
import {RuleCodeEditorComponent} from "./rule-attributes/rule-code-editor.component";
import {RuleNameEditorComponent} from "./meter-rule/rule-name-editor.component";
import {MiMeterCodeEditorComponent} from "./meter-rule/meter-code-editor.component";
import {MeterNameEditorComponent} from "./meter-rule/meter-name-editor.component";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";




@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    ...routedComponents,
      MiMeterCodeEditorComponent,
      MeterNameEditorComponent,
      RuleCodeEditorComponent,
      RuleNameEditorComponent,

  ],
    entryComponents:[
        MiMeterCodeEditorComponent,
        MeterNameEditorComponent,
        RuleCodeEditorComponent,
        RuleNameEditorComponent
    ],
  providers: [
      ArcService,
  ],
})
export class arcTablesModule { }
