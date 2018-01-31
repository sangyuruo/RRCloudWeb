import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {OuTestRoutingModule, routedComponents} from './ouTest-routing.module';
import {Ng2SmartTableModule} from "../../ng2-smart-table/ng2-smart-table.module";
import {OrgsModule} from "../ou/orgs/orgs.module";
import {OuTestService} from "./ouTest.service";
import {AddressNameEditorComponent} from "./companyTest/addressname-editor.components";
import {CompanyService} from "../entities/company/company.service";
import {CompanyNameEditorComponent} from "../ou/company/companyname-editor.components";
import {CompanyCodeEditorComponent} from "../ou/company/companycode-editor.components";
/*import {AddressNameEditorComponent} from "./company/addressname-editor.components";
import {CompanyNameEditorComponent} from "./organization/companyname-editor.components";
import {CompanyCodeEditorComponent} from "./organization/companycode-editor.components";
import {OrgsModule} from "../orgs/orgs.module";*/



@NgModule({
    imports: [
        ThemeModule,
        OuTestRoutingModule,
        Ng2SmartTableModule,
        OrgsModule
    ],
    declarations: [
        ...routedComponents,
        AddressNameEditorComponent,
        CompanyNameEditorComponent,
        CompanyCodeEditorComponent,

    ],
    entryComponents:[AddressNameEditorComponent,CompanyNameEditorComponent,CompanyCodeEditorComponent],
    providers: [
        OuTestService,
        CompanyService
    ],
})
export class OuTestModule { }
