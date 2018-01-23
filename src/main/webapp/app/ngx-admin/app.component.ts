/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {ApiService} from "./app.service";

@Component({
  selector: 'ngx-app',
  template: `
      <router-outlet></router-outlet>
      <router-outlet name="pop"></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
              private apiService: ApiService
              ) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();

      //组织
      this.apiService.initOrganizationesDatas();
      //公司
      this.apiService.initCompaniesDatas();
      //串口
      this.apiService.initCompointsDatas();
      //地址
      this.apiService.initAddressesDatas();
  }
}
