import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './ou-routing.module';
import {OuService} from "./ou.service";
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {AddressNameEditorComponent} from "./company/addressname-editor.components";

import {OrgsModule} from "./orgs/orgs.module";
import {CompanyNameEditorComponent} from "./company/companyname-editor.components";
import {CompanyCodeEditorComponent} from "./company/companycode-editor.components";

import {OrgCodeEditorComponent} from "./organization/orgcode-editor.components";
import {OrgNameEditorComponent} from "./organization/orgname-editor.components";
import {CpNameEditorComponent} from "./organization/companyname-editor.components";



@NgModule({
    imports: [
        ThemeModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        OrgsModule
    ],
    declarations: [
        ...routedComponents,
        AddressNameEditorComponent,
        CompanyNameEditorComponent,
        CompanyCodeEditorComponent,
        CpNameEditorComponent,

        OrgCodeEditorComponent,
        OrgNameEditorComponent

    ],
    entryComponents:[AddressNameEditorComponent,
        CpNameEditorComponent,
        CompanyNameEditorComponent,CompanyCodeEditorComponent,OrgCodeEditorComponent,
        OrgNameEditorComponent],
    providers: [
        OuService,
    ],
})
export class TablesModule { }
