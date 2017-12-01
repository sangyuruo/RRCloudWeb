import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {UserRouteAccessService, LoginModalService} from '../../shared/index';
import {Principal} from "../../shared/auth/principal.service";
import {AccountService} from "../../shared/auth/account.service";
import {StateStorageService} from "../../shared/auth/state-storage.service";
import {SessionStorageService} from "ng2-webstorage";

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
    providers:[
        UserRouteAccessService,   //新增
        LoginModalService,
        Principal,
        AccountService,
        StateStorageService,
        SessionStorageService
    ]
})
export class PagesModule {
}
