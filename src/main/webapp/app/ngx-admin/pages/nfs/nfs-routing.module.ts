import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './nfs.component';

import {MessageTempalte} from "./message-template/smart-table.component";

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


