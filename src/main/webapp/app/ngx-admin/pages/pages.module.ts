import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {JhiEventManager} from "ng-jhipster";
import {EmCloudWebAdminModule} from "./admin/admin.module";
import {ProfileService} from "../../layouts/profiles/profile.service";
import {customHttpProvider} from "../../blocks/interceptor/http.provider";
import {PaginationConfig} from "../../blocks/config/uib-pagination.config";
import {UserRouteAccessService} from "../../shared/auth/user-route-access-service";



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
    providers: [JhiEventManager,
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
    ]
})
export class PagesModule {
}
