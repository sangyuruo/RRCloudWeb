import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {JhiEventManager} from "ng-jhipster";
import {EmCloudWebAdminModule} from "../../admin/admin.module";


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,

      //增加docs模块
      EmCloudWebAdminModule

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
    providers:[JhiEventManager]
})
export class PagesModule {
}
