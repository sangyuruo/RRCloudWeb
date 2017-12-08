import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import { SmartTableComponent } from './company/smart-table.component';
import {Organizationtable} from "./organization/smart-table.component";




const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'company',
    component: SmartTableComponent,

  }, {
      path: 'organization',
      component: Organizationtable,
      }],
  },]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
    Organizationtable,

];
