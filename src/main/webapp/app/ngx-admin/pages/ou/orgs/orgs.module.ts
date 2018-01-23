import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import {Ng2SmartTableModule} from "../../../ng2-smart-table/ng2-smart-table.module";
import { TreeModule } from 'ng2-tree';
import {OrganizationTableComponent} from "./tables/organization.table.component";
import {OrganizationTreeComponent} from "./tree/organization.tree.component";
import {OrgsComponent} from "./orgs.component";


@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule,
        TreeModule,
    ],
    declarations: [
        OrgsComponent,
        OrganizationTableComponent,
        OrganizationTreeComponent,
    ],
})
export class OrgsModule { }

