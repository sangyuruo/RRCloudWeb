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
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {JhiDateUtils} from "ng-jhipster";
import {NbAuthModule} from "./@nebular/auth/auth.module";

import {ApiService} from "./app.service";
import {EmCloudWebAppModule} from "../app.module";

import { AbmModule } from 'angular-baidu-maps';
import {AbmConfig} from "./pages/maps/bdmaps/core/abm.config";
import {LoaderService} from "./pages/maps/bdmaps/core/loader.service";

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

      //npm install angular-baidu-maps --save
      //https://github.com/cipchk/angular-baidu-maps.git
      //百度API http://lbsyun.baidu.com/jsdemo.htm#f0_3
      //增加百度地图模块
      AbmModule.forRoot({
          apiKey: 'SSIGjdDybXdVt5wBDrnAjGbZ9hvwOgVp' // app key为必选项
      })
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
      //添加charts服务
      ApiService,
      //添加日期服务
      JhiDateUtils,

      AbmConfig,
      LoaderService

  ],
})
export class EmCloudWebNgxAppModule {
}
