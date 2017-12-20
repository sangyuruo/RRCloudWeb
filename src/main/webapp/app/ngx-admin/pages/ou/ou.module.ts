import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {AddressNameEditorComponent} from "./company/addressname-editor.components";
import {CompanyNameEditorComponent} from "./organization/companyname-editor.components";
import {CompanyCodeEditorComponent} from "./organization/companycode-editor.components";




@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,



    ],
    declarations: [
        ...routedComponents,
        AddressNameEditorComponent,

        CompanyNameEditorComponent,
        CompanyCodeEditorComponent
    ],
    entryComponents:[AddressNameEditorComponent,CompanyNameEditorComponent,CompanyCodeEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
