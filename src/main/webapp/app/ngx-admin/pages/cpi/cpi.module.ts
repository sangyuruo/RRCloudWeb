import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './cpi-routing.module';

import {CpiService} from "./cpi.service";
import {AddressCodeEditorComponent} from "./com-point/addresscode-editor.components";
import {CompanyCodeEditorComponent} from "./com-point/companycode-editor.components";
import {OrgCodeEditorComponent} from "./com-point/orgcode-editor.components";
import {CompointCodeEditorComponent} from "./com-point-status/compointcode-editor.components";

import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {CompanyNameEditorComponent} from "./com-point/companyname-editor.components";
import {AddressNameEditorComponent} from "./com-point/addressname-editor.components";
import {OrgNameEditorComponent} from "./com-point/orgname-editor.components";
import {DictNameEditorComponent} from "./com-point/dict-name-editor.component";
import {regNameEditorComponent} from "./com-point/regname-editor.components";


@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
      AddressCodeEditorComponent,
      AddressNameEditorComponent,
      CompanyNameEditorComponent,
      CompanyCodeEditorComponent,
      OrgCodeEditorComponent,
      OrgNameEditorComponent,
      CompointCodeEditorComponent,
      DictNameEditorComponent,
      regNameEditorComponent
  ],
    entryComponents:[
        AddressCodeEditorComponent,
        AddressNameEditorComponent,
        CompanyNameEditorComponent,
        CompanyCodeEditorComponent,
        OrgCodeEditorComponent,
        OrgNameEditorComponent,
        CompointCodeEditorComponent,
        DictNameEditorComponent,
        regNameEditorComponent
    ],

  providers: [
      CpiService,
  ],
})
export class CpiModule { }
