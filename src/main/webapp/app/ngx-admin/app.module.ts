/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import '../vendor.ts';
import './typings.d.ts';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {JhiDateUtils} from "ng-jhipster";
import {NbAuthModule} from "./@nebular/auth/auth.module";

import {NB_AUTH_TOKEN_WRAPPER_TOKEN} from "./@nebular/auth/auth.options";
import {NbAuthJWTToken} from "./@nebular/auth/services/token.service";
import {ApiService} from "./app.service";
import {SessionStorageService} from "ng2-webstorage";
import {EmCloudWebAppModule} from "../app.module";
import {UserRouteAccessService} from "../shared/auth/user-route-access-service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),


      //增加jhipster主模块
      EmCloudWebAppModule,

      NbAuthModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
      //添加charts服务
      ApiService,
      //添加日期服务
      JhiDateUtils,

      //添加
      { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
      //jhipster权限认证
      SessionStorageService,
      NgbActiveModal,
      UserRouteAccessService,

  ],
})
export class EmCloudWebNgxAppModule {
}
