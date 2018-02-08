import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './mi-routing.module';
import {MiService} from "./mi.service";
import {MeterTypeEditorComponent} from "./meter-info/meter-type-editor.component";
import {MiMeterCodeEditorComponent} from "./meter-status/meter-code-editor.component";
import {MsiMeterCodeEditorComponent} from "./multiway-switch/meter-code-editor.component";
import {MsiSwitchCodeEditorComponent} from "./multiway-switch/switch-code-editor.component";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {DictClassifyValueEditorComponent} from "./meter-category-info/dict-classify-value-editor.component";
import {OrganizationNameEditorComponent} from "./meter-info/organization-name-editor.component";
import {CompanyNameEditorComponent} from "./meter-info/company-name-editor.component";
import {CpiRegisterNameEditorComponent} from "./meter-info/cpi-register-name-editor.component";
import {AddressNameEditorComponent} from "./meter-info/address-name-editor.component";
import {FunctionCodeEditorComponent} from "./meter-category-info/function-code-editor.component";
import {AbmModule} from "../../@bdmap/index";
import {LongitudeEditorComponent} from "./meter-info/longitude-editor.component";
import {MibaidumapComponent} from "./mibaidumap/mibaidumap.component";
import {LatiudeEditorComponent} from "./meter-info/latitude-editor.component";
@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

      AbmModule.forRoot({
          apiKey: 'SSIGjdDybXdVt5wBDrnAjGbZ9hvwOgVp' // app key为必选项
      })
  ],
  declarations: [
    ...routedComponents,
      CompanyNameEditorComponent,
      OrganizationNameEditorComponent,
      CpiRegisterNameEditorComponent,
      AddressNameEditorComponent,
      MeterTypeEditorComponent,
      MiMeterCodeEditorComponent,
      MsiMeterCodeEditorComponent,
      MsiSwitchCodeEditorComponent,
      DictClassifyValueEditorComponent,
      FunctionCodeEditorComponent,
      LongitudeEditorComponent,
      LatiudeEditorComponent,
      MibaidumapComponent

  ],

    entryComponents:[CompanyNameEditorComponent,
        OrganizationNameEditorComponent,
        CpiRegisterNameEditorComponent,
        AddressNameEditorComponent,
        MeterTypeEditorComponent,
        MiMeterCodeEditorComponent,
        MsiMeterCodeEditorComponent,
        MsiSwitchCodeEditorComponent,
        DictClassifyValueEditorComponent,
        FunctionCodeEditorComponent,
        LongitudeEditorComponent,
        LatiudeEditorComponent,
        MibaidumapComponent
    ],

  providers: [
    MiService,
  ],
})
export class MiModule { }
