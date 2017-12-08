import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './arc-routing.module';
import {ArcService} from "./arc.service";




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
      ArcService,
  ],
})
export class arcTablesModule { }
