import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';

import {MessageTempalte} from "./MessageTemplate/smart-table.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
      path: 'message-template',
      component: MessageTempalte,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,

    MessageTempalte
];


