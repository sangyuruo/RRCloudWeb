import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './nfs-routing.module';
import {NfsService} from "./nfs.service";
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
   NfsService
  ],
})
export class TablesModule { }
