import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { AddressComponent } from './address/address.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
      {
          path: 'address',
          component: AddressComponent,
      },
      {
          path: 'area',
          component: AreaComponent,
      }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    AddressComponent,
    AreaComponent,
];
