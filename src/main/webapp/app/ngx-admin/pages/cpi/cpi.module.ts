import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './cpi-routing.module';

import {CpiService} from "./cpi.service";
import {AddressCodeEditorComponent} from "./com-point/addresscode-editor.components";
import {CompanyCodeEditorComponent} from "./com-point/companycode-editor.components";
import {OrgCodeEditorComponent} from "./com-point/orgcode-editor.components";
import {CompointCodeEditorComponent} from "./com-point-status/compointcode-editor.components";

import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";


@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
      AddressCodeEditorComponent,
      CompanyCodeEditorComponent,
      OrgCodeEditorComponent,

      CompointCodeEditorComponent,
  ],
    entryComponents:[AddressCodeEditorComponent,CompanyCodeEditorComponent,OrgCodeEditorComponent,CompointCodeEditorComponent],
  providers: [
      CpiService,
  ],
})
export class TablesModule { }
