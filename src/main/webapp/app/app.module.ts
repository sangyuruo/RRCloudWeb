import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { UserRouteAccessService } from './shared';
import { EmCloudWebHomeModule } from './home/home.module';

import { EmCloudWebAccountModule } from './account/account.module';


import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import {EmCloudWebEntityModule} from "./ngx-admin/pages/entities/entity.module";
import {EmCloudWebAdminModule} from "./ngx-admin/pages/admin/admin.module";
import {EmCloudWebSharedModule} from "./shared/shared.module";


@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EmCloudWebSharedModule,
        EmCloudWebHomeModule,
        EmCloudWebAdminModule,
        EmCloudWebAccountModule,
        EmCloudWebEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,

    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EmCloudWebAppModule {}
