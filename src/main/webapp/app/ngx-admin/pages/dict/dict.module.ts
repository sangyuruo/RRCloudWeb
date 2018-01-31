import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './dict-routing.module';
import {DictService} from "./dict.service";
import {DictCodeEditorComponent} from "./dictionary-classify/dictcode-editor.components";
import {seqNoEditorComponent} from "./dictionary-classify/seqNo-editor.components";

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
      DictCodeEditorComponent,
      seqNoEditorComponent
  ],
    entryComponents:[DictCodeEditorComponent,seqNoEditorComponent],
  providers: [
    DictService,
  ],
})
export class TablesModule { }
