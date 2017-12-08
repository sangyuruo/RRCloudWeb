import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import {SmartTableComponentResource} from "./Resource/smart-table.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'Resource',
    component: SmartTableComponentResource,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    SmartTableComponentResource,
];
