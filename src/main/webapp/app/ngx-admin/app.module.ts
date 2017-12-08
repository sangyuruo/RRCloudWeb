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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



//添加
import { NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken } from '@nebular/auth';
//添加
import { NbEmailPassAuthProvider, NbAuthModule } from '@nebular/auth';
//添加
const formSetting: any = {
    redirectDelay: 0,
    showMessages: {
        success: true,
    },
};

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

      //添加
      NbAuthModule.forRoot({
          providers: {
              email: {
                  service: NbEmailPassAuthProvider,
                  config: {
                      baseEndpoint: '',
                      login: {
                          endpoint: '/auth/login',
                          method: 'post',
                          redirect: {
                              success: '/pages',
                              failure: null,
                          },
                      },
                      register: {
                          endpoint: '/api/auth/register',
                          method: 'post',
                      },
                      logout: {
                          endpoint: '/api/auth/logout',
                          method: 'post',
                      },
                      requestPass: {
                          endpoint: '/api/auth/request-pass',
                          method: 'post',
                      },
                      resetPass: {
                          endpoint: '/api/auth/reset-pass',
                          method: 'post',
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
                  redirectDelay: 0,
              },
          },
      }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
      //添加
      { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
  ],
})
export class EmCloudWebNgxAppModule {
}