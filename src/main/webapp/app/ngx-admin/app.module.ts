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
import {NbEmailPassAuthProvider} from "./@nebular/auth/providers/email-pass-auth.provider";

import {NB_AUTH_TOKEN_WRAPPER_TOKEN} from "./@nebular/auth/auth.options";
import {NbAuthJWTToken} from "./@nebular/auth/services/token.service";
import {ApiService} from "./app.service";
import {EmCloudWebSharedModule} from "../shared/shared.module";
import {SessionStorageService} from "ng2-webstorage";
import {EmCloudWebAccountModule} from "../account/account.module";
import {EmCloudWebHomeModule} from "../home/home.module";
import {UserRouteAccessService} from "../shared/auth/user-route-access-service";
//添加
/*const formSetting: any = {
    redirectDelay: 1500,
    showMessages: {
        success: true,
    },
};*/

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

      //添加jhipster权限认证
      EmCloudWebSharedModule,
      EmCloudWebAccountModule,
      //增加jhipster首页
      EmCloudWebHomeModule,

      NbAuthModule.forRoot(/*{
          providers: {
              email: {
                  service: NbEmailPassAuthProvider,
                  config: {
                      baseEndpoint: '',
                      login: {
                          alwaysFail: false,
                          rememberMe: true,
                          endpoint: '/auth/login',
                          method: 'post',
                          redirect: {
                              success: '/pages',
                              failure: null,
                          },
                          defaultErrors: ['登录失败，请重新登录。'],
                          defaultMessages: ['登录成功！'],
                      },
                      register: {
                          alwaysFail: false,
                          rememberMe: true,
                          endpoint: 'emclouduaa/api/register',
                          method: 'post',
                          redirect: {
                              success: '/auth/login',
                              failure: '/auth/login',
                          },
                          defaultErrors: ['出了点问题，请重试。'],
                          defaultMessages: ['您已成功注册。'],
                      },
                      logout: {
                          alwaysFail: false,
                          endpoint: '/auth/logout',
                          method: 'post',
                          redirect: {
                              success: '/auth/login',
                              failure: '/auth/login',
                          },
                          defaultErrors: ['出了点问题，请重试。'],
                          defaultMessages: ['您已成功注销。'],
                      },
                      requestPass: {
                          endpoint: 'emclouduaa/api/account/change-password',
                          method: 'post',
                          redirect: {
                              success: '/auth/reset-password',
                              failure: '/auth/reset-password',
                          },
                          defaultErrors: ['出了点问题，请重试。'],
                          defaultMessages: ['重置密码说明已发送到您的电子邮件。'],
                      },
                      resetPass: {
                          endpoint: 'emclouduaa/api/account/change-password',
                          method: 'post',
                          redirect: {
                              success: '/auth/login',
                              failure: '/auth/login',
                          },
                          resetPasswordTokenKey: 'reset_password_token',
                          defaultErrors: ['出了点问题，请重试。'],
                          defaultMessages: ['你的密码已成功更改。'],
                      },
                  },
              },
          },
          forms: {
              login: formSetting,
              register: formSetting,
              requestPassword: formSetting,
              resetPassword: formSetting,
              logout: {
                  redirectDelay: 1500,
              },
          },
      }*/),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
      //添加charts服务
      ApiService,
      //添加日期服务
      JhiDateUtils,
      //添加保护路由
      /*AuthGuard,*/
      UserRouteAccessService,
      //添加
      { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
      //jhipster权限认证
      SessionStorageService,
      NgbActiveModal,

  ],
})
export class EmCloudWebNgxAppModule {
}
