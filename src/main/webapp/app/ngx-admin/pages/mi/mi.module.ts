import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './mi-routing.module';
import {MiService} from "./mi.service";

import {CompanyCodeEditorComponent} from "./meter-info/company-code-editor.component"
import {OrganizationCodeEditorComponent} from "./meter-info/organization-code-editor.component"
import {ComPointCodeEditorComponent} from "./meter-info/com-point-code-editor.component";
import {AddressCodeEditorComponent} from "./meter-info/address-code-editor.component";
import {MeterNameEditorComponent} from "./meter-category-info/meter-name-editor.component";
import {MeterTypeEditorComponent} from "./meter-category-info/meter-type-editor.component";
import {MiMeterCodeEditorComponent} from "./meter-status/meter-code-editor.component";
import {MsiMeterCodeEditorComponent} from "./multiway-switch/meter-code-editor.component";
import {MsiSwitchCodeEditorComponent} from "./multiway-switch/switch-code-editor.component";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
      CompanyCodeEditorComponent,
      OrganizationCodeEditorComponent,
      ComPointCodeEditorComponent,
      AddressCodeEditorComponent,
      MeterNameEditorComponent,
      MeterTypeEditorComponent,
      MiMeterCodeEditorComponent,
      MsiMeterCodeEditorComponent,
      MsiSwitchCodeEditorComponent
  ],

    entryComponents:[CompanyCodeEditorComponent,
        OrganizationCodeEditorComponent,
        ComPointCodeEditorComponent,
        AddressCodeEditorComponent,
        MeterNameEditorComponent,
        MeterTypeEditorComponent,
        MiMeterCodeEditorComponent,
        MsiMeterCodeEditorComponent,
        MsiSwitchCodeEditorComponent
    ],

  providers: [
    MiService,
  ],
})
export class TablesModule { }
