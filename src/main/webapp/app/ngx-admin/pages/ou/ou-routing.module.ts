import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuComponent } from './ou.component';

import { CompanyComponent } from './company/company.component';
import {OrganizationComponent} from "./organization/organization.component";




const routes: Routes = [{
  path: '',
  component: OuComponent,
  children: [{
    path: 'company',
    component: CompanyComponent,

  }, {
      path: 'organization',
      component: OrganizationComponent,
      }],
  },]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    OuComponent,
    CompanyComponent,
    OrganizationComponent,

];
