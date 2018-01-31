import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './cpi.component';
import { ComPointComponent } from './com-point/com-point.component';
import { comPointStatusComponent } from './com-point-status/com-point-status.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
      {
          path: 'comPoint',
          component: ComPointComponent,
      },

      {
          path: 'ComPointStatus',
          component: comPointStatusComponent,
      }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
    ComPointComponent,
    comPointStatusComponent,
];
