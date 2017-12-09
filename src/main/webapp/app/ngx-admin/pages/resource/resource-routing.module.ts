import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResourceComponent} from "./resource/resource.component";

const routes: Routes = [{
  path: '',
  component: ResourceComponent,
  children: [{
    path: 'Resource',
    component: ResourceComponent,
  },],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
    ResourceComponent,
    ResourceComponent,
];
