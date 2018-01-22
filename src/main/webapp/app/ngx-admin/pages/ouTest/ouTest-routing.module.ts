import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OuTestComponent} from './ouTest.component';
import {CompanyTestComponent} from "./companyTest/companyTest.component";
import {CompanyDetailComponent} from "./companyTest/company-detail.component";



const routes: Routes = [{
        path: '',
        component: OuTestComponent,
        children: [{
            path: 'companyTest',
            component: CompanyTestComponent
        },{
            path: 'companyTest/:id',
            component: CompanyDetailComponent
        }],
    },]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OuTestRoutingModule {
}

export const routedComponents = [
    OuTestComponent,
    CompanyTestComponent,
    CompanyDetailComponent
];
