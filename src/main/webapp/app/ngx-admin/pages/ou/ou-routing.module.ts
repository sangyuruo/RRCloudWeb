import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OuComponent} from './ou.component';
import {CompanyComponent} from './company/company.component';
import {OrganizationComponent} from "./organization/organization.component";
import {OrgsComponent} from "./orgs/orgs.component";
import {CompanyDetailComponent} from "./company/company-detail.component";


const routes: Routes = [{
        path: '',
        component: OuComponent,
        children: [{
            path: 'company',
            component: CompanyComponent,

        }, {
            path: 'company/:id',
            component: CompanyDetailComponent,
        }, {
            path: 'organization',
            component: OrganizationComponent,
        },
            {
                path: 'orgtree',
                component: OrgsComponent,
                // loadChildren: () => new Promise(resolve => {
                //     (require as any).ensure([], require => {
                //         resolve(require('./orgs/orgs.module').OrgsModule);
                //     })
                // })
            }
        ],
    },]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
}

export const routedComponents = [
    OuComponent,
    CompanyComponent,
    OrganizationComponent,
    CompanyDetailComponent
];
