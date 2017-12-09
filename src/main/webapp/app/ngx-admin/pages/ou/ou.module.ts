import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";




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
        OuService,
    ],
})
export class TablesModule { }
