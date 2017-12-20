import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './loc-routing.module';

import {LocService} from "./loc.service";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
      LocService
  ],
})
export class TablesModule { }
