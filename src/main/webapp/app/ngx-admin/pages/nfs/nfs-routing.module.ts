import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NfsComponent } from './nfs.component';

import {MessageTemplateComponent} from "./message-template/message-template.component";

const routes: Routes = [{
  path: '',
  component: NfsComponent,
  children: [{
      path: 'message-template',
      component: MessageTemplateComponent,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    NfsComponent,
    MessageTemplateComponent
];


