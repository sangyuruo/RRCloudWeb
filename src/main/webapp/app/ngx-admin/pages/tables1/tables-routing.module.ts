import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import { SmartTableComponent } from './company/smart-table.component';
import {Organizationtable} from "./organization/smart-table.component";

import {SmartTableComponent1} from "./smart-table1/smart-table.component";


const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,

  }, {
      path: 'organization',
      component: Organizationtable,
      }],
  },{
      path: 'smarttable1',
      component: SmartTableComponent1,
  }]
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
    SmartTableComponent1
];
