import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {JhiEventManager} from "ng-jhipster";
import {EmCloudWebSharedModule} from '../../shared/shared.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
      //新增
      EmCloudWebSharedModule,


    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
    providers:[JhiEventManager]
})
export class PagesModule {
}
